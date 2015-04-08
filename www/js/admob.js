<!-- Inicio del Codigo -->

function adSetter()
{
    //alert("adsetter");
    if (admob) 
    {
        var adPublisherIds = 
        {
            ios : 
            {
                banner : "ca-app-pub-2274389873586188/4592156959",
                interstitial : "ca-app-pub-8440343014846849/4596573817"
            },

            android : 
            {
                banner: 'ca-app-pub-2274389873586188/4592156959',
                interstitial : "ca-app-pub-8440343014846849/3119840614"
            }
        };

        var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;
        admob.setOptions({
            publisherId: admobid.banner,
            interstitialAdId: admobid.interstitial
        });

        admob.createBannerView();
        admob.requestInterstitialAd();
    } 

    else 
    {
        //if no admob present
    }
}

function onDeviceReady()
{
    //alert("device ready");
    adSetter();
}

function backCall(e)
{
    // pormt when back button is pressed on home screen
    e.preventDefault();
    var action=confirm("Do you want to exit?");
    if(action)
    {
        //admob.requestInterstitialAd();
        // window.MediaScannerPlugin.scanFile(function(msg){},function(err){} );
        navigator.app.exitApp();
    }
}

function domLoaded()
{
    document.addEventListener("deviceready", onDeviceReady, false);
    document.addEventListener("backbutton", backCall, false);
}

<!-- Fin del código -->

