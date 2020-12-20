var themeValue = window.localStorage.getItem('theme');
if (themeValue != undefined) {
    if (themeValue == 1) {
        changeTheme(themeValue, 'style1');
    } else {
        changeTheme(themeValue, 'style2');
    }
}


var themeBtn = document.getElementById('changeThemeBtn');
themeBtn.addEventListener('click', function() {
    if (window.localStorage.getItem('theme') == 1) {
        changeTheme(2, 'style1');

    } else {
        changeTheme(1, 'style2');
    } 
});


function changeTheme(theme, iconClass) {
    var stylesheet = document.getElementById('themeCSSLink');
    stylesheet.setAttribute('href', 'css/style'+theme+'.css');
    window.localStorage.setItem('theme', theme);

    document.getElementById('changeThemeIcon').className = iconClass;

        
}

console.log(sessionStorage.getItem("style"));
if(sessionStorage.getItem("style")!=null) {
	var couleur = sessionStorage.getItem("style2");
	console.log(couleur);
	document.getElementById("style1").setAttribute("href", couleur);
}






