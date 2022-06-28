<template>
<nav class="nav">
    <ul>
      <li class="nav__title">Servicez</li>	
      <li class="nav__item">Over Ons</li>
      <li class="nav__item">Cocktails</li>
      <li class="nav__item">Nieuws</li>
      <li class="nav_login">Login</li>
    </ul>
    
  </nav>
</template>
<style lang="scss">
body
{
    overflow-x: hidden;
}
.nav {
	position: sticky;
	display: flex;
	align-items: center;
	height: 60px;
	top: 0;
}
.nav {
	background: rgb(255, 255, 255);
	&__title {
		margin: 0px 30px;
        position: relative;
        top: 25px; 
        list-style-type: none;
        font-weight: bolder;
	}
	&__item {
		display: inline-block;
		margin: 0px 30px;
        position: relative;
        left: 120%;
	}   
    
}
.nav_login { 
    margin: 0px 30px;
    position: relative;
    left: 220%; 
    display: inline-block;    
}
</style>