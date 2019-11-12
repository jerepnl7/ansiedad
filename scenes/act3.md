# act3

```
SceneSetup.act3();
Game.WORDS_HEIGHT_BOTTOM = 205;
sfx("cheers");
```

r: ¡A tu salud!

```
publish("act3",["roofhunter",1]);
publish("act3",["roofhong",1]);
sfx("drinking");
```

(...4001)

```
publish("act3-alpha", ["dizzyhunter",1]);
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",3]);
```

h2: *Ah*, justo lo que necesitaba para el cuerpo.

```
publish("act3",["roofhunter",2]);
publish("act3",["roofhong",2]);
```

r: ¿Sabes qué, chavala...?

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",6]);
```

h2: Y con "cuerpo" me refiero a mi cuerpo amigdalino.

```
publish("act3",["roofhunter",8]);
publish("act3",["roofhong",5]);
```

r: Me recuerdas a mí misma cuando era más joven. Cuando me atormentaba ese animal de mi cabeza.

```
publish("act3",["roofhunter",9]);
publish("act3",["roofhong",2]);
```

r: Me alegro mucho de poder ayudarte a matar a ese bicho de la misma manera que yo maté al mío.

```
publish("act3",["roofhunter",2]);
```

r: Va, pregunta rápida: ¿verdad o re-

```
publish("act3",["roofhunter",3]);
publish("act3",["roofhong",7]);
publish("act3-alpha", ["dizzyhong",0]);
```

h2: ¡RETO!

```
publish("act3-alpha", ["dizzyhong",1]);
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",2]);
```

r: ¡Ja, ja! Bien.

```
publish("act3",["roofhunter",21]);
publish("act3",["roofhong",4]);
```

r: A ver. ¿Ves esa piscina cristalina de ahí abajo?

```
publish("act3-alpha", ["dizzyhong",0]);
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",9]);
```

h2: ¿La que está seis pisos más abajo?

```
publish("act3",["roofhunter",10]);
publish("act3",["roofhong",8]);
```

r: Salta.

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",10]);
```

h2: ...

```
publish("act3",["roofhong",11]);
```

h2: Espera, ¿qué?

```
publish("act3",["roofhong",10]);
publish("act3",["roofhunter",2]);
```

r: Ya se está quejando el animal otra vez, ¿verdad?

```
publish("act3",["roofhunter",23]);
```

r: *Oh, noooo. Es peligroso, no lo hagaaaas.*

```
publish("act3",["roofhunter",22]);
```

r: ¡Pero precisamente por eso necesitamos experiencias cercanas a la muerte! ¡Fiesta loca! ¡Carpe diem! ¡Esnifa coca del ^culo^ de una ^prosti^! ¡Que la vida son dos días!

```
publish("act3",["roofhunter",10]);
```

r:  ¡Demuéstrale a ese animal que nos suda la *^polla^* que se queje como una ^perra^! Salta.

```
publish("act3",["roofhunter",11]);
publish("act3",["roofhong",13]);
```

h2: Eh, pero a veces, eh... el miedo tiene razón...

```
publish("act3",["roofhunter",5]);
publish("act3",["roofhong",12]);
music(null, {fade:2});
```

r: ...

```
publish("act3-alpha", ["dizzyhunter",0]);
publish("act3",["roofhunter",6]);
publish("act3",["dd",1]);
```

r: ¿Pero es que te crees esas chorradas del McMindfulness? ¿Te crees eso de que sentirse mal es *bueno*?

```
publish("act3",["roofhunter",17]);
```

r: El placer es lo contrario al dolor. ¡Por lo tanto, puedes usar placer para combatir el dolor, es una ^puta^ regla de tres!

```
publish("act3",["roofhunter",18]);
```

r: ¡¿Cómo es que los pseudo-budistas esos de Silicon Valley no se dan cuenta de esta ^mierda^?!

```
publish("act3",["roofhunter",6]);
```

r: Chavala, sé que *tú* eres consciente de que ese animal nos *perjudica* a la gente como nosotras. *Tortura* a la gente como nosotras.

```
publish("act3",["roofhunter",19]);
```

r: No es tu amigo. Es un bicho, una bestia rabiosa, que, o bien la *sedas*,

```
publish("act3",["roofhunter",20]);
```

r: o bien le *metes una bala en el cráneo*.

```
publish("act3",["roofhunter",27]);
```

r: Y, si no, lo estás dejando ganar.

```
publish("act3",["roofhunter",31]);
publish("act3",["roofhong",14]);
publish("act3",["dd",2]);
```

h2: No. Te equivocas.

```
publish("act3",["roofhunter",13]);
publish("act3",["roofhong",15]);
music('battle_dark', {volume:1.0}, function(){
	music('battle_dark_loop');
});
```

h2: No voy a dejar que me gane.

```
publish("act3",["roofhunter",25]);
publish("act3-alpha", ["roofhong",0]);
publish("act3-alpha", ["transition",1]);
publish("act3",["dd",6]);
```

r: ¡Así se habla, cielo! ¡Mátalo y a tomar por ^culo^! <3

(#act3a)



# act3a

```
Game.clearText();
publish("act3-out");
Game.WORDS_HEIGHT_BOTTOM = -1; /* reset */
_.act3_bb_body = 1;
```

(...1500)

```
publish("hp_show");
```

b: no no no no no no

n: ESTE CAPÍTULO TIENE DOS FINALES POSIBLES. UNO DE LOS CUALES ES *MUY, MUY MALO*.

b: NO NO NO NO NO NO NO NO NO NO NO NO NO NO

n: ELIGE SABIAMENTE. PROTEGE A TU HUMANA

`bb({ eyes:"oh_crap", mouth:"normal_talk", MOUTH_LOCK:true });`

b: AAAAAAAAAAAAAAAAAA

`bb({ mouth:"normal" });`

n: BUENA SUERTE

```
Game.clearText();
bb({ eyes:"start" });
```

[¡Humana, te puedes MORIR de verdad!](#act3a_harm) `Game.OVERRIDE_CHOICE_LINE=true`

[¡Esto es estúpido y autodestructivo!](#act3a_bad) `Game.OVERRIDE_CHOICE_LINE=true`

[¡Estos locos no son tus amigos de verdad!](#act3a_alone) `Game.OVERRIDE_CHOICE_LINE=true`

# act3a_harm

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: ¡H--

(#act3a_after)

# act3a_alone

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: ¡E--

(#act3a_after)

# act3a_bad

`bb({ MOUTH_LOCK:true, mouth:"normal_talk" });`

b: ¡E--

(#act3a_after)

# act3a_after

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: Sabes, tal vez te creería... si no fuera la enésima vez que me haces esto.

h: Eres como Pedro y el lobo.

```
bb({ eyes:"sad" });
```

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_harm"`

[](#act3_fork) `_.SPECIAL_ATTACK="harm"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_alone"`

[](#act3_fork) `_.SPECIAL_ATTACK="alone"; Game.OVERRIDE_CHOICE_LINE=true`

`Game.OVERRIDE_CHOICE_SPEAKER = "fear_bad"`

[](#act3_fork) `_.SPECIAL_ATTACK="bad"; Game.OVERRIDE_CHOICE_LINE=true`


# act3_fork

```
Game.clearText();
bb({body:"special_attack"});
sfx("charging");
Game.FORCE_CANT_SKIP = true;
```

(...1001)

```
Game.FORCE_CANT_SKIP = false;
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: Eso también lo has hecho ya.

b: humana, por favor...

`hong({ eyes:"look_right" });`

h: Oh, *perdón* por automedicarme y no hacer lo que la gran industria farmacéutica global quiere que haga.

h: Mira, ^capullo^, *todo el mundo* tiene alguna manera de hacerte cerrar la ^puta^ boca.

`hong({ body:"look_up", eyes:"look_up" });`

h: Hay gente que se mete en su trabajo.

`hong({ body:"look_down", eyes:"look_down" });`

h: Hay gente que se mete en drogas, sexo y Facebook.

`hong({ body:"normal", eyes:"look_right" });`

h: Hay gente que se mete en relaciones con otra gente.

`hong({ eyes:"angry" });`

h: Y yo me voy a meter en esa piscina.

[Vas borracha y es un SALTO DE SEIS PISOS](#act3_bad_1_harm)

[Jolín, ¡¿así me das las gracias?!](#act3_bad_1_insult) `bb({eyes:"angry"});`

[Vale. Lo admito. He metido la pata.](#act3_good_1) `bb({mouth:"sorry", eyes:"sorry_down"});`

# act3_bad_1_harm

b: ¡Aunque caigas al agua, la tensión superficial romperá tus costillas y te dará una concusión *como mínimo*!

h: Bah.

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

h: Vi un vídeo de YouTube de un ruso que hacía justo esto.

(#act3_bad_2)

# act3_bad_1_insult

`hong({ eyes:"look_right" });`

h: Eh-- ¿Perdona, las *gracias*?

`bb({ eyes:"angry" });`

b: ¡Precisamente por estas cosas *existo*! ¡Porque los humanos no podéis cuidar de vosotros mismos!

b: Llevo salvándote el culo toda tu vida y ahora va la señorita y--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)

# act3_good_1

`hong({ body:"laugh_1" })``

h: heh.

`hong({ body:"laugh_2" })``

h: hahahaha

`hong({ body:"laugh_3" })``

h: JAJAJAJAJAJA

```
bb({ eyes:"sorry"});
hong({ body:"yell_1", mouth:"yell", eyes:"blank" });
```

h: ¡^OSTIA^, no me digas! ¿¡En serio!? ¡La revelación del siglo, oye!

`hong({ body:"yell_2" });`

h: ¡Pues sí, saco de ^mierda^ podrida sangrienta! ¡Has metido la pata pero hasta el ^puto^ fondo!

`hong({ body:"normal", mouth:"angry", eyes:"angry" });`

h: ¿Algo más que decir, Perogrullo?

[¡Pero la venganza no es la solución!](#act3_good_1_fail_revenge) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[¡Pero esta vez *llevo la razón*!](#act3_good_1_fail_harm) `bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });`

[Te he hecho daño.](#act3_good_2a)


# act3_good_1_fail_revenge

b: Lo que tienes que hacer es construir una relación más sana con tus emociones, en vez de ahogarlas a base d--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)



# act3_good_1_fail_harm

b: Así que, por favor, suelta esa botella y--

```
hong({body:"drink"});
bb({body:"attacked"});
attackBB("32p");
_.act3_bb_body++;
```

(...2000)

```
hong({ body:"normal", mouth:"angry", eyes:"angry" });
bb({ body:"normal_"+_.act3_bb_body, mouth:"normal", eyes:"normal" });
```

(#act3_bad_2)




# act3_bad_2

`bb({ eyes:"sad" });`

b: no... por favor...

h: Uy, qué mala pinta tiene tu barra de energía, lobito...

h: Yo en tu lugar elegiría mis próximas palabras con mucha cautela.

`bb({ eyes:"normal" });`

[Se acabó. Me he cansado de protegerte.](#act3_bad_2_jump) `bb({ mouth:"ignore", eyes:"ignore" });`

[Te lo llevo diciendo desde el principio.](#act3_bad_2_right)

[Perdón.](#act3_good_2b) `bb({mouth:"sorry", eyes:"sorry_down"});`


# act3_bad_2_jump

b: Hala, venga, salta si quieres. Ya me da igual.

`hong({ eyes:"look_right", mouth:"normal", MOUTH_LOCK:true });`

h: ...

```
hong({ eyes:"less_angry", mouth:"normal" });
bb({ eyes:"ignore_oh_crap" });
```

h: Vale. De un trago.

```
bb({ mouth:"normal", eyes:"oh_crap" });
Game.OVERRIDE_TEXT_SPEED = 2;
```

b: NO ESPERA ESO ERA PSICOLOGÍA INVERSA SE SUPONÍA QUE TENÍAS QUE HACER LO *CONTRARIO* A LO QU--

(#act3_bad_3)



# act3_bad_2_right

`bb({ eyes:"angry" });`

b: *Estás* en peligro. Esos "amigos" tuyos te están *utilizando*. Y *tú* estás utilizando a esos "amigos" tuyos.

`bb({ eyes:"sad" });`

b: Humana, por favor... ¡¿por qué no confías en mí?!

h: Porque *tú* nunca confías en mí.

(#act3_bad_3)


# act3_bad_2_terrible

`bb({ eyes:"angry" });`

b: Hay otros lobitos guardianes que tienen humanos que se toman su tiempo para entrenarlos pacientemente, para *aprender* a trabajar en equipo,

b: ¡en vez de limitarse a odiar a los lobitos guardianes porque intentan protegerlos! ¿Por qué no--

`bb({ eyes:"normal" });`

h: Respuesta equivocada, ^gilipollas^.

(#act3_bad_3)



# act3_bad_3

```
music(null);
hong({body:"drink"});
bb({body:"attacked"});
publish("bb_STOP_VIBRATING");
attackBB("100p");
```

(...2000)

```
hong({ body:"normal", mouth:"normal", eyes:"normal" });
bb({ body:"dead" });
```

(...999)

h: *"Lo único a lo que hay que temer es al temor en sí."*

`hong({ body:"look_up", mouth:"happy", eyes:"blank" });`

h: *"Don't worry, be happy!"* ¡Fuera preocupaciones y sé feliz!

`hong({ body:"normal", mouth:"normal", eyes:"normal" });`

h: Todos los genios de nuestro tiempo están de acuerdo: ¡las emociones negativas son *malas*!

`hong({ eyes:"less_angry" });`

h: ¡Por algo se llaman *negativas*!

b: humana... por favor...

`hong({ eyes:"normal" });`

h: Tiempo atrás dije: "Solo quiero liberarme de todo este dolor."

h: Pues mi deseo se ha hecho realidad. Ya no siento dolor, ni miedo ni ansiedad...

h: Ya no siento nada de nada.

`_.a3_ending = "jump";`

(#act3_end)



# act3_good_2a

`bb({mouth:"sorry", eyes:"sorry_down"});`

b: Me obsesioné tanto con que nada te hiciera daño que no me di cuenta de que *yo* te lo estaba haciendo.

```
bb({ eyes:"sorry"});
hong({ body:"yell_2", mouth:"yell", eyes:"blank" });
```

h: NO J^ODAS^.

`hong({ body:"yell_1" });`

h: LA MADRE QUE TE ^PARIÓ^. ¿De verdad has tardado tanto darte cuenta?

`hong({ body:"cry", mouth:"cry", eyes:"blank" });`

h: Podíamos habernos ahorrado todo esto, pedazo de ^gilipollas^ blandito y grandullón. ¿Cómo no te has dado cuenta?...

`_.apologized_for_hurt = true;`

(#act3_good_2q)



# act3_good_2b

`hong({ body:"normal", mouth:"angry", eyes:"look_right" });`

h: ...que te *perdone*.

`hong({ eyes:"angry", MOUTH_LOCK:true });`

h: ...

h: ¿Que te perdone *el qué*?

(#act3_good_2q)


# act3_good_2q

`bb({mouth:"sorry", eyes:"sorry"});`

{{if _.apologized_for_hurt}}
(#act3_good_2q_already_apologized)
{{/if}}

{{if !_.apologized_for_hurt}}
(#act3_good_2q_not_already_apologized)
{{/if}}


# act3_good_2q_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"less_angry" });`

[Perdón por no saber protegerte.](#act3_good_3_protector)

[Perdón por no respetarte.](#act3_good_3_respect)

[Perdón.](#act3_good_4)


# act3_good_2q_not_already_apologized

`hong({ body:"normal", mouth:"angry", eyes:"angry" }, 0);`

[¡Perdón por tener una humana tan horrible!](#act3_bad_2_terrible) `bb({mouth:"normal", eyes:"normal"})`

[Perdón por no respetarte.](#act3_good_3_respect)

[Perdón por hacerte daño.](#act3_good_3_hurt)



# act3_good_3_protector

`bb({eyes:"sorry_down"});`

b: Es mi deber protegerte contra peligros *de verdad*, pero lo único que he hecho ha sido ladrarle a los coches o al cartero.

`bb({eyes:"sorry_up"});`

b: O ladrarle a las sombras. Ladro mucho.

`bb({eyes:"sorry"});`

b: Así que es lógico que me quieras poner un bozal.

`bb({eyes:"sorry_down"});`

b: Perdón.

(#act3_good_4)



# act3_good_3_respect

`bb({eyes:"sorry_down"});`

b: Yo soy *tu* leal perrito guardián, pero me he comportado como si tuvieras que *obedecerme*.

`bb({eyes:"sorry_up"});`

b: Hay una diferencia entre ser un protector y ser el vigilante de una cárcel, y yo me he pasado de la raya.

`bb({eyes:"sorry_down"});`

b: Perdón.

(#act3_good_4)



# act3_good_3_hurt

`bb({eyes:"sorry_down"});`

b: Me obsesioné tanto con evitar que te hicieras daño que no me di cuenta de que *yo* te estaba haciendo daño.

`bb({eyes:"sorry_up"});`

b: He sido un perro malo.

`bb({eyes:"sorry_down"});`

b: Perdón.

(#act3_good_4)


# act3_good_4

```
music(null,{fade:3});
hong({ eyes:"less_angry", MOUTH_LOCK:true },0);
```

h: ...

```
hong({ body:"stop", mouth:"stop", eyes:"blank" });
```

h: Bueno, sí, de todos modos esto es una estupidez.

h: Solo lo he hecho para que te desplomaras y, bueno, desplomado estás.

h: Lo dejamos en empate, ¿te parece bien?

```
bb({ mouth:"sorry", eyes:"sorry" });
bb({ MOUTH_LOCK:true });
```

b: ...

b: Vale.

h: Vale.

n: *EMPATE*

`_.a3_ending = "walkaway";`

(#act3_end)









# act3_end

```
Game.clearText();
publish("act3-in");
publish("hp_hide");
Game.FORCE_CANT_SKIP = true;
```

{{if _.a3_ending=="walkaway"}}
(#act3_walkaway)
{{/if}}

{{if _.a3_ending=="jump"}}
(#act3_jump)
{{/if}}






# act3_walkaway

```
publish("start-walkaway-anim");
Game.WORDS_HEIGHT_BOTTOM = 205;
```

(...3501)

```
sfx("bottle_toss");
publish('hong-next');
publish("act3",["roofhunter",7]);
```

(...667)

```
publish("act3",["dd",4]);
publish("act3",["roofhunter",26]);
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("concrete_step2");
```

(...667)

```
publish('hong-next');
publish("act3",["roofhunter",27]);
```

`Game.FORCE_CANT_SKIP = false;`

r: ¿*En serio*? ¿Después de todo lo que te ha hecho ese animal, vas a *rendirte* así de fácil?

r: ¿Qué te pasa, chavala? ¿Te da *miedo*?

```
publish('hong-next');
publish("act3",["roofhunter",26]);
```

h2: Sí.

h2: Me da miedo.

`publish('hong-next')`

h2: ¡Y no pasa nada!

`publish('hong-next')`

h2: No pasa nada por tener miedo.

`publish('hong-next')`

(...500)

```
Game.clearText();
Game.FORCE_CANT_SKIP = true;
```

(...1167)

```
publish('hong-next');
```

(...833)

```
publish('hong-next');
sfx("rustle2");
```

(...1333)

```
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",31]);
sfx("concrete_step4");
```

(...667)

```
publish('hong-next');
sfx("concrete_step1");
```

(...667)

```
publish('hong-next');
sfx("door");
```

(...1333)

```
publish('hong-next');
sfx("concrete_step2");
```

(...501)

```
publish('hong-next');
Game.FORCE_CANT_SKIP = false;
sfx("lock_door");
publish("act3",["roofhunter",32]);
```

(...2001)

```
publish("act3",["roofhunter",33]);
```

r: ¿Ha cerrado con llave?

```
Game.clearAll();
_.INJURED = false;
Game.WORDS_HEIGHT_BOTTOM = -1;
```

(...2000)

(#act4)




# act3_jump

```
publish("start-jump-anim");
Game.FORCE_TEXT_Y = 300;
```

(...2001)

```
publish('hong-next');
sfx("bottle_toss");
```

(...833)

```
sfx("concrete_step1");
sfx("claps");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",28]);
```
(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step2");
publish('hong-next');
publish("act3",["roofhunter",28]);
```

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

`publish("act3",["roofhunter",28]);`

(...125)

`publish("act3",["roofhunter",29]);`

(...125)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",5]);
publish("act3",["roofhunter",34]);
```

(...1167)

```
sfx("rustle2");
publish('hong-next');
```

(...1001)

`publish('hong-next')`

b: no...

(...501)

`Game.clearText();`

`publish('hong-next')`

(...1333)

```
sfx("quack");
publish('hong-next');
```

(...1333)

`publish('hong-next')`

b: no no no

(...501)

`Game.clearText();`

`publish('hong-next')`

(...2001)

```
sfx("rustle2");
publish('hong-next')
```

(...501)

```
sfx("concrete_step1");
publish('hong-next');
publish("act3",["dd",4]);
publish("act3",["roofhunter",30]);
```

(...167)

```
sfx("concrete_step2");
publish('hong-next');
```

(...167)

```
sfx("concrete_step3");
publish('hong-next');
publish("act3",["dd",2]);
publish("act3",["roofhunter",15]);
```

(...167)

```
sfx("bottle_slip");
publish('hong-next');
publish("act3",["dd",3]);
publish("act3",["roofhunter",16]);
```

(...833)

```
sfx("rustle");
publish('hong-next');
```

(...167)

`publish('hong-next')`

(...167)

```
publish('hong-next');
Game.FORCE_TEXT_Y = 325;
Game.OVERRIDE_FONT_SIZE = 50;
```

b: ¡NO!

(...400)

```
Game.WORDS_HEIGHT_BOTTOM = -1;
Game.FORCE_TEXT_Y = -1;
Game.clearText();
publish("act4-injury-show");
publish("hide_tabs");
```

(...2000)

```
sfx("hospital1");
publish("act4-injury", [1]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital2");
publish("act4-injury", [2]);
```

(...4000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...2000)

```
sfx("hospital3");
publish("act4-injury", [3]);
```

(...8000)

```
stopAllSounds();
publish("act4-injury", [0]);
```

(...5500)

`_.INJURED = true;`

(#act4)
