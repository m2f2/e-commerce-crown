import {takeLatest, all, call, put} from "redux-saga/effects";
import { USER_ACTIONS_TYPES } from "./user.type";

import {signInFailed, signInSuccess,signUpFailed, signUpSuccess,signOutSuccess, signOutFailed} from "./user.action";

import { 
          getCurrentUser, 
          createUserDocumentFromAuth, 
          signInWithGooglePopup, 
          signInAuthUserWithEmailAndPassword,
          createAuthUserWithEmailAndPassword,
          signOutUser,
} from "../../utils/firebase/firebase";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails){
          try{
                    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
                    yield put(signInSuccess({id:userSnapshot.id, ...userSnapshot.data()}))
          }
          catch(e){
                    yield put(signInFailed(e));
          }
}

export function* signInWithGoogle(){
          try{
                    const {user} = yield call(signInWithGooglePopup);
                    yield call(getSnapshotFromUserAuth, user)
          }
          catch(e){
                    yield put(signInFailed(e));
          }
}


export function* signInWithEmail({payload:{email, password}}){
          try{
                    const {user} = yield call(signInAuthUserWithEmailAndPassword, email, password);
                    yield call(getSnapshotFromUserAuth, user)
          }
          catch(e){
                    yield put(signInFailed(e));
          }
}


export function* isUserAuthenticated(){
          try{
                    const userAuth = yield call(getCurrentUser);
                    if(!userAuth) return;
                    yield call(getSnapshotFromUserAuth, userAuth);
          }
          catch(e){
                    yield put(signInFailed(e)); 
          }
}

export function* signUp({payload:{email, password, displayName}}){
          try{
                    const {user} = yield call(createAuthUserWithEmailAndPassword, email,password);
                    yield put(signUpSuccess(user, {displayName}))
          }
          catch(e){
                    yield put(signUpFailed(e));
          }
}

export function* signOut(){
          try{
                    yield call(signOutUser);
                    yield put(signOutSuccess());
          }
          catch(e){
                    yield put(signOutFailed(e));
          }
}

export function* signInAfterSignUp({payload:{user, additionalDetails }}){
          yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onGoogleSignInStart() {
          yield takeLatest(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
          }

export function* onCheckUserSession() {
          yield takeLatest(USER_ACTIONS_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
          }
export function* onEmailSignInStart() {
          yield takeLatest(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
          }
export function* onSignUpStart(){
          yield takeLatest(USER_ACTIONS_TYPES.SIGN_UP_START,signUp);
}
export function* onSignUpSuccess(){
          yield takeLatest(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS,signInAfterSignUp);
}
export function* onSignOUTStart(){
          yield takeLatest(USER_ACTIONS_TYPES.SIGN_OUT_START,signOut);
}

export function* userSaga(){
          yield all([call(onCheckUserSession), 
                    call(onGoogleSignInStart), 
                    call(onEmailSignInStart),
                    call(onSignUpStart),
                    call(onSignUpSuccess),
                    call(onSignOUTStart)
          ])
          }