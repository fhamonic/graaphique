Installer nodejs et npm :

    sudo apt install nodejs npm

puis installer les dépendances

    npm install express mustache-express echarts jquery
    
    cp node_modules/echarts/dist/echarts.min.js public/js/echarts.min.js
    cp node_modules/jquery/dist/jquery.min.js public/js/jquery.min.js


et lancer le serveur avec :

    node server.js