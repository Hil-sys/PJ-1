document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('pre');
        if ( !preloader.classList.contains('done') )
        {
            preloader.classList.add('done')
        }
    }, 5000);
}