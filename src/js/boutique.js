$(document).ready(function(){
    //1. Make a constructor for all the stores
    //Include name, style, address, city,
    //distance away, email, and website. 

    var boutqiue = function (info){
      this.name = info.name;
      this.style = info.style;
      this.yearFounded = info.year;
      this.address = info.address;
      this.city = info.city;
      this.distance = 0;
      this.website = info.website;
      this.contact = info.contact;

    };

    //2. Make list of all Colorado boutiques
    //AndrsienMorton, 

    var andrisenMorton = {
      name: "Andrisen Morton",
      style: "Gentlemen",
      yearFounded: 1978,
      address: "270 Saint Paul St, Denver, CO 80206",
      city: "Denver",
      website: "http://www.andrisenmorton.com/",
      contact: "303.377.8488"
    };

    var armitageAndMcmillan = {
      name: "Armitage & Mcmillan",
      style: "Lifestyle",
      yearFounded: 2014,
      address: "1550 Platte St, Suite D, Denver, CO 80202",
      city: "Denver",
      website: "http://armitageandmcmillan.com/",
      contact: "303.284.6222"
    };

    var berkeleySupply = {
      name: "Berkeley Supply",
      style: "American",
      yearFounded: 2012,
      address: "4309 Tennyson St, Denver, CO 80212",
      city: "Denver",
      website: "http://berkeleysupply.com/",
      contact: "720.445.6818"
    };

    var blacklandClothing = {
      name: "Blackland Clothing",
      style: "Americana",
      yearFounded: 2012,
      address: "4309 Tennyson St, Denver, CO 80212",
      city: "Denver",
      website: "http://www.blacklandclothing.com/",
      contact: "720.445.6818"
    };

    var jiberish = {
      name: "Jiberis",
      style: "Lifestyle",
      yearFounded: 2005,
      address: "1620 Platte Street Unit F, Denver, CO 80202",
      city: "Denver",
      website: "https://www.jiberish.com/",
      contact: "lohi@jiberish.com"
    };

    var lawrenceCovell = {
      name: "Lawrence Covell",
      style: "Gentlemen",
      yearFounded: 1967,
      address: "225 Steele Street, Denver CO 80206",
      city: "Denver",
      website: "http://www.lawrencecovell.com/",
      contact: "303.320.1023"
    };

    var soulhaus = {
      name: "Soul Haus",
      style: "Lifestyle",
      yearFounded: 1999,
      address: "1225 East 17th Avenue, Denver, Colorado.",
      city: "Denver",
      website: "http://www.soulhaus.com/",
      contact: "303.830.7685"
    };

    var steadbrook = {
      name: "Steadbrook",
      style: "Lifestyle",
      yearFounded: 2013,
      address: "46 South Broadway, Denver, CO 80209",
      city: "Denver",
      website: "http://steadbrook.com/",
      contact: "720.441.1891"
    };

    var sullyAndCo = {
      name: "Sully & Co",
      style: "Gentlemen",
      yearFounded: 2014,
      address: "2443 Eliot Street, Denver, Colorado 80211",
      city: "Denver",
      website: "http://sullyandco.com/",
      contact: "720.398.8064"
    };

    var topoFlagship = {
      name: "Topo Designs Denver Flagship",
      style: "Active Wear",
      yearFounded: 2010,
      address: "2500 Larimer St. #102 Denver, CO 80205",
      city: "Denver",
      website: "http://topodesigns.com/",
      contact: "303.954.8420"
    };

    var topoFoco = {
      name: "Topo Designs Fort Collins",
      style: "Active Wear",
      yearFounded: 2010,
      address: "130B S. College Ave. Fort Collins, CO 80524",
      city: "Fort Collins",
      website: "http://topodesigns.com/",
      contact: "970.568.8628"
    };

    var topoBoco = {
      name: "Topo Designs Boulder",
      style: "Active Wear",
      yearFounded: 2010,
      address: "935 Pearl St., Boulder, CO 80302",
      city: "Boulder",
      website: "http://topodesigns.com/",
      contact: "720.255.2932"
    };

    var winterSessions = {
      name: "Winter Session",
      style: "Americana",
      yearFounded: 2010,
      address: "2952 Welton St., Denver, CO 80205",
      city: "Denver",
      website: "http://www.winter-session.com/",
      contact: "hello@winter-session.com"
    };


});
