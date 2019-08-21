document.addEventListener('click', function(event) {
    if (event.target.id === 'burger-opener') {
        document.querySelector('.open-burger').style.display = 'block';
    }

    if (event.target.id === 'burger-closer') {
        document.querySelector('.open-burger').style.display = '';
    }

    if (event.target.id === 'q1') {
        if (document.getElementById('a1').style.display === "") {
            document.getElementById('a1').style.display = 'block';
            document.querySelector('.image-q1').src = 'images/icon-arrow-down.svg'
        } 
        else if (document.getElementById('a1').style.display === 'block') {
            document.getElementById('a1').style.display = "";
            document.querySelector('.image-q1').src = 'images/icon-arrow.svg'
        }
    }
    if (event.target.id === 'q2') {
        if (document.getElementById('a2').style.display === "") {
            document.getElementById('a2').style.display = 'block';
            document.querySelector('.image-q2').src = 'images/icon-arrow-down.svg'
        } 
        else if (document.getElementById('a2').style.display === 'block') {
            document.getElementById('a2').style.display = "";
            document.querySelector('.image-q2').src = 'images/icon-arrow.svg'
        }
    }
    if (event.target.id === 'q3') {
        if (document.getElementById('a3').style.display === "") {
            document.getElementById('a3').style.display = 'block';
            document.querySelector('.image-q3').src = 'images/icon-arrow-down.svg'
        } 
        else if (document.getElementById('a3').style.display === 'block') {
            document.getElementById('a3').style.display = "";
            document.querySelector('.image-q3').src = 'images/icon-arrow.svg'
        }
    }
    if (event.target.id === 'q4') {
        if (document.getElementById('a4').style.display === "") {
            document.getElementById('a4').style.display = 'block';
            document.querySelector('.image-q4').src = 'images/icon-arrow-down.svg'
            document.querySelector('.last').style.borderBottom = "";
        } 
        else if (document.getElementById('a4').style.display === 'block') {
            document.getElementById('a4').style.display = "";
            document.querySelector('.image-q4').src = 'images/icon-arrow.svg'
        }
    }
    else if (event.target.id === 'slide-1') {
        document.getElementById('s1').style.height = 'auto';
        document.getElementById('s2').style.height = 0;
        document.getElementById('s3').style.height = 0;
        document.getElementById('slide-1').style.borderBottom = '3px solid hsl(0, 94%, 66%)';
        document.getElementById('slide-1').style.fontWeight = 'bold';
        document.getElementById('slide-2').style.fontWeight = 'normal';
        document.getElementById('slide-3').style.fontWeight = 'normal';
        document.getElementById('slide-2').style.borderBottom = '1px solid #ccc';
        document.getElementById('slide-3').style.borderBottom = '1px solid #ccc';
    }
    else if (event.target.id === 'slide-2') {
        document.getElementById('s2').style.height = 'auto';
        document.getElementById('s1').style.height = 0;
        document.getElementById('s3').style.height = 0;
        document.getElementById('slide-2').style.borderBottom = '3px solid hsl(0, 94%, 66%)';
        document.getElementById('slide-2').style.fontWeight = 'bold';
        document.getElementById('slide-1').style.fontWeight = 'normal';
        document.getElementById('slide-3').style.fontWeight = 'normal';
        document.getElementById('slide-1').style.borderBottom = '1px solid #ccc';
        document.getElementById('slide-3').style.borderBottom = '1px solid #ccc';
    }
    else if (event.target.id === 'slide-3') {
        document.getElementById('s3').style.height = 'auto';
        document.getElementById('s1').style.height = 0;
        document.getElementById('s2').style.height = 0;
        document.getElementById('slide-3').style.borderBottom = '3px solid hsl(0, 94%, 66%)';
        document.getElementById('slide-3').style.fontWeight = 'bold';
        document.getElementById('slide-2').style.fontWeight = 'normal';
        document.getElementById('slide-1').style.fontWeight = 'normal';
        document.getElementById('slide-2').style.borderBottom = '1px solid #ccc';
        document.getElementById('slide-1').style.borderBottom = '1px solid #ccc';
    }
});