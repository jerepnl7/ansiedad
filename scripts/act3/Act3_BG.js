Loader.addImages([
	{ id:"rooftop_bg", src:"sprites/act3/rooftop_bg.png" },
	{ id:"rooftop_hunter", src:"sprites/act3/hunter.png" },
	{ id:"rooftop_hong", src:"sprites/act3/hong.png" },
	{ id:"rooftop_dd", src:"sprites/act3/dd.png" },
	{ id:"dizzy", src:"sprites/act3/dizzy.png" },
	{ id:"hospital", src:"sprites/act3/hospital.png" },
]);

Loader.addSounds([
	{ id:"lock_door", src:"sounds/sfx/lock_door.mp3" }
]);

function BG_Rooftop(){

	var self = this;

	// BACKGROUND SPRITES
	var BGSpriteConfig = {
		image: Library.images.rooftop_bg,
		grid:{ width:2, height:2 },
		frame:{ width:1400, height:1200 },
	};
	self.bg = new Sprite(BGSpriteConfig);
	self.skyline = new Sprite(BGSpriteConfig);
	self.skyline.gotoFrame(1);
	self.clouds = new Sprite(BGSpriteConfig);
	self.clouds.gotoFrame(2);
	self.roof = new Sprite(BGSpriteConfig);
	self.roof.gotoFrame(3);

	// ROOF HUNTER, HONG, DEEDUM, DIZZIES
	self.roofhunter = new Sprite({
		image: Library.images.rooftop_hunter,
		grid:{ width:8, height:5 },
		frame:{ width:400, height:360 },
		y: 219
	});
	self.roofhong = new Sprite({
		image: Library.images.rooftop_hong,
		grid:{ width:8, height:8 },
		frame:{ width:720, height:800 },
		y: 225
	});
	self.dd = new Sprite({
		image: Library.images.rooftop_dd,
		grid:{ width:4, height:2 },
		frame:{ width:240, height:120 },
		y: 300
	});
	var DizzySpriteConfig = {
		image: Library.images.dizzy,
		grid:{ width:4, height:2 },
		frame:{ width:50, height:50 }
	}
	self.dizzyhunter = new Sprite(DizzySpriteConfig);
	self.dizzyhunter.y = 205;
	self.dizzyhong = new Sprite(DizzySpriteConfig);
	self.dizzyhong.y = 221;

	// Anxiety BG - TODO: ALL BOXES FALL DOWN
	self.anxiety = new BG_Anxiety();

	// Characters
	self.hong = new Act3_Hong();
	self.beebee = new Act3_Beebee();

	// Hospital scene
	self.hospitalSprite = new Sprite({
		image: Library.images.hospital,
		grid:{ width:4, height:1 },
		frame:{ width:720, height:1200 },
	});
	self.hospitalSprite.visible = false;

	////////////////////////////////////////
	// LAYERS //////////////////////////////
	////////////////////////////////////////

	self.layers = [

		self.bg,
		self.skyline,
		self.clouds,
		self.roof,

		self.roofhunter,
		self.dd,
		self.dizzyhunter,
		self.dizzyhong,
		self.roofhong,

		self.anxiety,
		self.hong,
		self.beebee,

	];
	var PARALLAXES = [
		
		0.05,	// bg
		0.1,	// skyline
		0.0,	// clouds
		0.3,	// roof

		0.5,	// roofhunter
		0.5,	// dd
		0.5,	// dizzyhunter
		0.5,	// dizzyhong
		1.0,	// roofhong

		0.0,	// anxiety
		0.0,	// hong
		0.0,	// beebee

	];
	var OFFSETS = [

		0, // bg
		0, // skyline
		0, // clouds
		0, // roof

		0, // roofhunter
		0, // dd
		79, // dizzyhunter
		211, // dizzyhong
		0, // roofhong
		
		0, // anxiety
		0, // hong
		0, // beebee

	];
	var ALPHAS = [
		
		1, // bg
		1, // skyline
		1, // clouds
		1, // roof

		1, // roofhunter
		1, // dd
		1, // dizzyhunter
		1, // dizzyhong
		1, // roofhong
		
		0, // anxiety
		0, // hong
		0, // beebee

	];


	var parallax = 0;
	var parallaxTicker = 0;
	var PARALLAXING = null;
	var ticker = 0;
	self.update = function(){

		// START PARALLAXING IN / OUT
		if(PARALLAXING!=null){
			
			if(PARALLAXING=="out"){
				parallaxTicker += 1/60; // 0 to 1 in one second
			}
			if(PARALLAXING=="in"){
				parallaxTicker -= 1/60; // 1 to 0 in one second
			}
			if(parallaxTicker>1) parallaxTicker = 1;
			if(parallaxTicker<0) parallaxTicker = 0;

			// 0 to -180 in one second, smoothed
			var t = Math.cos(parallaxTicker*Math.TAU/2); // 1 to -1
			t = (1-t)/2; // 0 to 1
			parallax = -t*190;

			// Anxiety Alpha
			//ALPHAS[2] = t;

			// DONE
			if(t==1 || t==0){
				PARALLAXING = null;

				// Stage 1 transition end
				/*if(STAGE==1){
					ALPHAS[1] = 0; // HIDE Hunter
					ALPHAS[3] = 0; // HIDE Old Hong
					ALPHAS[4] = 1; // SHOW new hong
					ALPHAS[5] = 1; // SHOW Beebee
				}*/

			}

		}

		// SUPER HACKY - ANIMATE THE DIZZIES
		ticker += 1/60;
		var fps = 4;
		var frame = Math.round(ticker*fps) % 4; // fps times a second
		self.dizzyhunter.gotoFrame(frame);
		var frame = Math.round(ticker*fps) % 4 + 4; // fps times a second
		self.dizzyhong.gotoFrame(frame);

		// Anxiety BG
		/*if(ALPHAS[2]>0){
			self.anxiety.update(ALPHAS[2]);
			if(ALPHAS[2]==1){ // if fully visible...
				ALPHAS[0] = 0; // hide everything under
			}else{
				ALPHAS[0] = 1; // show everything under
			}
		}*/

	};

	self.draw = function(ctx){

		ctx.save();

		if(!self.hospitalSprite.visible){

			for(var i=0; i<self.layers.length; i++){
				var layer = self.layers[i];
				layer.x = PARALLAXES[i] * parallax + OFFSETS[i];
				if(ALPHAS[i]>0){
					ctx.globalAlpha = ALPHAS[i];
					layer.draw(ctx);
				}
			}

		}else{

			self.hospitalSprite.draw(ctx);

		}

		ctx.restore();

	};

	var STAGE = 0;
	var _subscriptions = [];
	_subscriptions.push(
		subscribe("act3-out", function(){
			STAGE = 1;
			PARALLAXING = "out";
			sfx("whoosh"); // WHOOSH
		}),
		subscribe("act3-in", function(){

			// SHOW ACTION, HIDE CHARS
			/*
			ALPHAS[1] = 1; // SHOW Hunter
			ALPHAS[3] = 1; // SHOW Roof Hong
			ALPHAS[4] = 0; // HIDE battle Hong
			ALPHAS[5] = 0; // HIDE battle Beebee
			*/

			// WHOOSH
			STAGE = 2;
			PARALLAXING = "in";
			sfx("whoosh");

		}),

		// HUNTER FRAME
		subscribe("hunter-roof", function(frameName){
			self.hunterSprite.gotoFrameByName(frameName);
		}),

		// JUMP OFF
		subscribe("start-jump-anim", function(){
			self.hongSprite.gotoFrame(4);
			self.hunterSprite.gotoFrameByName("front_badass");
		}),
		subscribe("hong-next", function(){
			self.hongSprite.nextFrame();
		}),

		// WALK AWAY
		subscribe("start-walkaway-anim", function(){
			self.hongSprite.gotoFrame(23);
			self.hunterSprite.gotoFrameByName("side_neutral");
		}),

		// INJURY
		subscribe("act4-injury-show", function(frame){
			self.hospitalSprite.visible = true;
		}),
		subscribe("act4-injury", function(frame){
			self.hospitalSprite.gotoFrame(frame);
		})
	);

	self.kill = function(){
		_subscriptions.forEach(unsubscribe);
	};

}