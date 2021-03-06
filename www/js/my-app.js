// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

 // Init slider and store its instance in mySwiper variable
 var mySwiper = myApp.swiper('.swiper-container', {
   pagination:'.swiper-pagination'
 });
// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}


// // cleaning controller question answer
// var pickerDevice = myApp.picker({
//     input: '#picker-device',
//     cols: [
//         {
//             textAlign: 'center',
//             values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
//         }
//     ]
// });


/* ===== Pickers ===== */
myApp.onPageInit('pickers', function (page) {
    var today = new Date();

    // iOS Device picker
    var pickerDevice = myApp.picker({
        input: '#ks-picker-device',
        cols: [
            {
                textAlign: 'center',
                values: ['iPhone 4', 'iPhone 4S', 'iPhone 5', 'iPhone 5S', 'iPhone 6', 'iPhone 6 Plus', 'iPad 2', 'iPad Retina', 'iPad Air', 'iPad mini', 'iPad mini 2', 'iPad mini 3']
            }
        ]
    });

    //房屋类型
    var pickerHousetype = myApp.picker({
        input: '#tt-picker-house-type',
        cols: [
            {
                textAlign: 'center',
                values: ['House', 'Townhouse', 'Apartment', 'Unit']
            }
        ]
    });

    //数量
    var pickerSleepnum = myApp.picker({
        input: '#tt-picker-sleep-num',
        cols: [
            {
                textAlign: 'center',
                values: ['1', '2','3','4','5','6']
            }
        ]
    });

    //数量
    var pickerDiningroomnum = myApp.picker({
        input: '#tt-picker-dinning-room-num',
        cols: [
            {
                textAlign: 'center',
                values: ['1', '2','3','4','5','6']
            }
        ]
    });

    //数量
    var pickerShowerroomnum = myApp.picker({
        input: '#tt-picker-shower-room-num',
        cols: [
            {
                textAlign: 'center',
                values: ['1', '2','3','4','5','6']
            }
        ]
    });
});
