

class geo{
    constructor(lat,long){
        this.lat = 43.54,
        this.long = -43.45
    }
}

class language extends geo{
    constructor(name,country,lat,long){
        super(lat,long)
        this.name=name;
        this.country= country
    }
}

var English = new language('English','USA')
undefined
English
language {lat: 43.54, long: -43.45, name: "English", country: "USA"}