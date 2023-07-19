# Router 학습
vue-router 설치
Route 셋팅 : /router/index.js 참고
<RouterView>, <RouterLink> 같은 내장 컴포넌트를 제공함
<RouterView> : 라우트에 매핑된 화면을 띄워줌
<RouterLink> : 리로딩이 이루어지지 않고 화면이동이 가능함
<template>안에서는 $route/$router를 이용하여 route 객체에 접근이 가능하고
<script setup>에서는 useRoute()/useRouter() 함수를 사용하여 접근이 가능하다.