class TV {
	constructor(brand,price,inches,on_off,channel,volume) {
		this.brand=brand;
		this.price=price;
		this.inches=inches;
		this.on_off=on_off;
		this.channel=1;
		this.volume=50;
	}
	volume_Up() {
		this.volume++;
	}
	volume_Down() {
		this.volume--;
	}
	set_Channel(number) {
		this.channel=number;
	}
	reset() {
		this.channel=1;
		this.volume=50;
	}
	status() {
		console.log(this.brand+' at channel '+this.channel+', volume '+this.volume);
	}
}
var panasonic=new TV('Panasonic',20000,55,true);
panasonic.set_Channel(25);
panasonic.volume_Up();
panasonic.volume_Up();
panasonic.volume_Up();
panasonic.volume_Up();
panasonic.volume_Up();
panasonic.volume_Up();
panasonic.volume_Up();
panasonic.volume_Up();
panasonic.volume_Up();
panasonic.volume_Down();
panasonic.volume_Down();
panasonic.volume_Down();
panasonic.volume_Down();
panasonic.volume_Down();
panasonic.status();