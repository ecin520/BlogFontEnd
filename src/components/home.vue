<template>
    <div id="home">
        <nav id="bar">
            <ul>
                <li>
                    <i class="logo">
                        <img src="@/assets/logo.png" />
                    </i>
                </li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Help</a></li>
                <li><a class="extra" href="#">Explore</a></li>
            </ul>  
        </nav>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
        <br><br><br><br><br><br><br>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    #home #bar ul{
        list-style-type: none;
        width: 100%;
        position: fixed;
        font-size: 20px;
        margin: 0;
        padding:0;
        top: 0;
    }
    #home #bar ul li{
        float: left;
        margin: 20px;
    }
    #home #bar .logo{
        width: 10px;
        height: 10px;
        font-style: normal;
    }
    #home #bar .logo img{
        max-width:10%;
        min-height:10%;
        display:block;
        font-size:0;
    }
</style>