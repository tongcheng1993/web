<template>
    <div id="app">
        <div id="view">
            <router-view></router-view>
        </div>
    </div>
</template>

<style>
    #app {
        background-color: pink;
        width: 100%;
        height: 100%;
        overflow: auto;
    }

    #view {
        overflow: auto;
        background-color: #d9d9d9;
        margin: 0 auto;
        width: 800px;
        height: 100%;
    }


</style>
