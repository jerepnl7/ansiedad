# intro

`SceneSetup.intro();`

# intro-play-button

(...51)

[¡JUGAR!](#intro-start) `publish("intro-to-game-1"); Game.OVERRIDE_CHOICE_LINE=true;`

# intro-start

(...500)

`clearText()`

n3: Antes de comenzar, ¿a qué velocidad prefieres el texto?

`publish("show_options_bottom")`

# intro-start-2

n3: Bien, comencemos con la historia...

```
publish("hide_tabs");
clearText();
```

(...1000)

`publish("intro-to-game-2")`

n2: ESTO ES UNA HUMANA

(...600)

`clearText()`

(...300)

`publish("intro-to-game-3")`

# act1

```
SceneSetup.act1();
publish("hide_tabs");
music('battle', {volume:0.5});
```

(...300)

n: Y ESTA ES LA ANSIEDAD DE LA HUMANA

n: _TÚ_ ERES LA ANSIEDAD

(#act1_normal)


# act1_normal

```
hong({body:"putaway"});
sfx("rustle");
Game.OVERRIDE_TEXT_SPEED = 1.5;
```

h: Nop. No, nop, no te escucho. Voy a usar un rato el móvil.

```
sfx("rustle2");
hong({body:"phone1", mouth:"neutral", eyes:"neutral"})
```

n: TU TRABAJO ES PROTEGER A LA HUMANA DE LOS *PELIGROS*

`bb({eyes:"look", mouth:"small_lock", body:"fear"})`

b: ¡Oh, cielos! ¡Estás malgastando tu tiempo en Twitter! ¡Otra vez!

```
bb({eyes:"normal", mouth:"normal", body:"normal"});
hong({eyes:"annoyed"});
```

h: Sí, me pregunto por qué no me pararé simplemente a pensar en mis cosas más a menudo.

`hong({eyes:"neutral"});`

n: ¡RÁPIDO, AVÍSALA DE ALGÚN *PELIGRO*!

```
bb({eyes:"look"});
```

[¡Oh, no! ¡Mira esta noticia tan horrible!](#act1d_news)

[Oh, no, ¿y si ese tuit es una indirecta hacia *nosotros*?](#act1d_subtweet)

[Mira, un GIF de un gatito bebiendo leche](#act1d_milk)

# act1d_milk

`hong({mouth:"smile", eyes:"surprise"});`

h: Je, sí, qué mono-

```
hong({mouth:"shock", eyes:"shock"});
bb({body:"scream"});
Game.OVERRIDE_TEXT_SPEED = 1.8;
```

b: LOS GATOS NO DIGIEREN BIEN LA LECHE Y SOMOS PERSONAS HORRIBLES POR DISFRUTAR DE ESTE FLAGRANTE MALTRATO ANIMAL

(...200)

```
bb({body:"normal", mouth:"normal", eyes:"fear"});
attack("20p", "bad");
publish("hp_show");
```



