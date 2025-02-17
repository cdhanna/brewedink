<script>
    import { expoInOut } from "svelte/easing";


  let socials = [
    {
      title: 'Github',
      link: 'https://github.com/cdhanna',
      image: './images/github.svg',
      class: 'github'
    },
    {
      title: 'Discord',
      link: 'https://discord.gg/yxFAFJurvU',
      image: './images/discord.svg'
    },
    {
      title: 'Twitter (stale)',
      link: 'https://twitter.com/BrewedInkGames',
      image: './images/twitter.svg'
    },
    {
      title: 'BlueSky',
      link: 'https://bsky.app/profile/brewedink.bsky.social',
      image: './images/bluesky.svg'
    },
    {
      title: 'Youtube',
      link: 'https://www.youtube.com/channel/UCBjnzVXcl7-r8yfK2eWnsWQ',
      image: './images/youtube.svg'
    },
    {
      title: 'Linked-In',
      link: 'https://www.linkedin.com/in/christopher-hanna/',
      image: './images/linkedin.svg'
    },
  ]

  let rows=[
    [
      { 
        title: 'Louie',
        link: 'https://store.steampowered.com/app/1172480/Louie/',
        titleImage: 'images/louie.png',
        img: 'gifs/louie_launch.gif',
        backgroundStyle: 'cover',
        descriptionRotation: 0,
        descriptionHtml: 'My love letter to the Apogee game, <i>Secret Agent</i>.',
        steam: `<iframe class="steam" src="https://store.steampowered.com/widget/1172480/" frameborder="0"
                                width="100%" height="190"></iframe>`
      },
      {
        title: 'Fade Basic',
        link: 'https://fadebasic.com',
        linkHtml: 'GOTO <pre>https://fadebasic.com</pre>',
        img: 'images/fade_screenshot.png',
        descriptionRotation: 8,
        backgroundStyle: 'cover',
        descriptionHtml: `<p><i>Fade</i> <b>BASIC</b> is a BASIC-esque scripting language for the dotnet runtime. It uses no runtime reflection, and is debuggable! There is full support with Visual Studio Code! </p>`
      },
      {
        title: 'Shoop',
        link: 'https://docs.google.com/presentation/d/1os3eKjfwUaPY4SkY1OeI_FtVjuL6JSaiZNYFyqAzqCc/edit?usp=sharing',
        titleImage: 'images/white_shoop.png',
        linkHtml: 'View Slide Deck',
        img: 'gifs/ShoopGif.gif',
        descriptionRotation: 8,
        backgroundStyle: 'top',
        descriptionHtml: `<p>An Android puzzle game! You need to swap pieces around to solve each puzzle.</p>
                          <p>Also, you're adrift in a cosmic whirl.</p>
                          <br><p>Sadly, Google Play took this game down because I stopped updating it for the latest android versions. Instead, please enjoy a technical post-mortem I gave a few years back</p>`
      },
    ],
    [

      {
        title: 'BNuget',
        link: 'https://assetstore.unity.com/packages/tools/integration/bnuget-269079',
        titleImage: 'images/bNuget.png',
        img: 'gifs/bnugetGif.gif',
        backgroundStyle: 'cover',
        descriptionRotation: 8,
        descriptionHtml: `<p>A Unity3D asset store package that brings Nuget to your Assembly Definitions!</p>`,
        unityAsset: {
          price: '$4.99',
          image: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/cc230320-8bf6-42bf-81b7-2d34e898cd47.jpg'
        }
      },
      {
        title: 'CRT FREE',
        link: 'https://assetstore.unity.com/packages/vfx/shaders/crt-free-248066',
        titleFontConsolas: true,
        img: 'gifs/crtfree.gif',
        descriptionRotation: 8,
        backgroundStyle: 'vertical',
        descriptionHtml: `<p>A Unity3D asset store VFX package that turns your screen into an old-school CRT. Dithering, color offsets, pixelation, and more!</p>`,
        unityAsset: {
          price: 'Free',
          image: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/a9168630-710f-4aff-905b-f8ac959174be.jpg'
        }
      },
      {
        title: 'Markdown Support',
        link: 'https://assetstore.unity.com/packages/tools/utilities/markdown-support-273051',
        titleImage: 'images/mdSupport.png',
        img: 'gifs/markdownGif.gif',
        descriptionRotation: 8,
        backgroundStyle: 'cover',
        descriptionHtml: `<p>A Unity3D asset store package that renders Markdown in the Inspector, and in the Runtime, using UIToolkit!</p>`,
        unityAsset: {
          price: '$4.99',
          image: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/e56af371-e490-435d-a6a1-8421426a33a3.jpg'
        }
      },

      {
        title: 'WFC',
        link: 'https://assetstore.unity.com/packages/tools/modeling/wave-function-collapser-193890',
        descriptionRotation: 8,
        img: 'gifs/wfc.gif',
        backgroundStyle: 'cover',
        descriptionHtml: `<p>A Unity3D asset store package to help you solve the Wave Function Collapse algorithm.</p>`,
        unityAsset: {
          price: 'Free',
          image: 'https://assetstorev1-prd-cdn.unity3d.com/key-image/0d5dc0d4-6a75-4fa3-9f64-90abe78bef75.jpg'
        }
      },
    ]
    
  ]

  let activeRowIndex = -1;
  let activeColIndex = -1;
  let innerWidth;
  let innerHeight;
  function isBigRow(rowIndex){
    if (innerWidth < 1000){
      return true;
    }
    if (innerHeight < 900){
      return true;
    }
    return rowIndex == activeRowIndex
  }
  function isBigCol(rowIndex){
    if (innerWidth < 1000){
      return true;
    }
    if (innerHeight < 900){
      return true;
    }
    return rowIndex == activeColIndex
  }
  function enter(rowIndex, colIndex){
    activeColIndex = colIndex;
    activeRowIndex = rowIndex;
  }
  function exit(){
    activeColIndex = -1;
    activeRowIndex = -1;
  }
  function random(max){
    let x = Math.floor(Math.random() * max);
    return x;
  }
  function getClipPath(row, col){
    if (row == activeRowIndex && col == activeColIndex){
      return `polygon(${0 + random(2)}% ${0 + random(2)}%,   ${100 - random(2)}% ${0 + random(2)}%,   ${100 - random(2)}% ${100 - random(2)}%, ${0 + random(2)}% ${100 - random(2)}%)`

    } else {
      return `polygon(${2 + random(8)}% ${2 + random(8)}%,   ${99 - random(8)}% ${2 + random(8)}%,   ${98 - random(10)}% ${98 - random(10)}%, ${2 + random(10)}% ${98 - random(10)}%)`
    }
  }
  function getRotation(row, col){
    if (row == activeRowIndex && col == activeColIndex){
      return 0
    } else {
      return random(10) - 5
    }
  }

  function getColTransform(row, col){
    return "none"
  }

</script>
<svelte:window bind:innerWidth bind:innerHeight />

<main>
  <div id="title">
    <div id="title-header">
      <h1>Brewed INK</h1>
      <h1 class="shadow">Brewed INK</h1>

      <div
        id="talks"
        style=""
      >
        <a
          href="https://github.com/cdhanna/brewedink/blob/main/Talks.md"
          style="
                background-color: #f3ec78;
                background-image: linear-gradient(213deg,#ffd301 45%, #ee5c17 62%);
                -webkit-background-clip: text;
                -moz-background-clip: text;
                -webkit-text-fill-color: transparent;
            "
        >
          Talks and Presentations
        </a>
      </div>
    </div>

    <article id="about">
      <!-- <h3>Chris Hanna</h3> -->
      <div id="chris">
        Chris Hanna operates under the moniker, Brewed Ink. He is an indie-game
        developer who got side tracked making Unity Assets. By daylight, he
        works at <a
          href="https://beamable.com"
          style="
            background-color: #f3ec78;
            background-image: linear-gradient(213deg,#ffd301 45%, #ee5c17 62%);
            -webkit-background-clip: text;
            -moz-background-clip: text;
            -webkit-text-fill-color: transparent;
        ">Beamable.</a
        >
        <!-- Chris is a software engineer who loves Game Development. These are a few of his projects. You can see more
            by checking out his Youtube page. He is based in the Boston area, and works on side projects and at a
            fulltime software job. If you want to contact him to say hi, contact him on Discord. -->
      </div>
      <div id="socials">
        <!-- Icons from https://github.com/edent/SuperTinyIcons/tree/master -->
         {#each socials as social}
          <a href={social.link} title={social.title} class="social">
            <div class={social.class} style="
            background-image: url({social.image})
          ">

            </div>
          </a>
         {/each}
        
      </div>
    </article>
  </div>


  <div id="content">
    {#each rows as row, rowIndex}
      <div class="row" class:big={isBigRow(rowIndex)} class:small={activeRowIndex != -1 && rowIndex != activeRowIndex}>
        {#each row as col, colIndex}
          <div class="col" 
            class:big={isBigCol(colIndex)} class:small={activeColIndex != -1 && colIndex != activeColIndex}
            style="
              transform: {getColTransform(rowIndex, colIndex)}
            "
            >
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="art {col.backgroundStyle}" 
              on:mouseleave={exit}
              on:mouseenter={e => enter(rowIndex, colIndex)}
              style="
              background-image: url({col.img});
              clip-path: {getClipPath(rowIndex, colIndex)};
            ">
            </div>

            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class="inner"
              on:mouseleave={exit}
              on:mouseenter={e => enter(rowIndex, colIndex)}
            >
              <a class="giant-link" href={col.link}></a>
          
              <div class="thing-title"
                style="
                  transform: rotate({getRotation(rowIndex, colIndex)}deg)
                ">
                {#if col.titleImage}
                  <img src="{col.titleImage}"/>
                {:else}
                  <span class:isConsolas={col.titleFontConsolas}>
                    {col.title}
                  </span>
                {/if}

              </div>

              <div class="thing-content">
                {#if col.descriptionHtml}
                  <div class="thing-desc" style="transform: rotate({random(col.descriptionRotation)-col.descriptionRotation*.5}deg)">
                    {@html col.descriptionHtml}
                  </div>
                {/if}   
                {#if col.steam}
                  {@html col.steam}
                {:else}
                  {#if col.unityAsset}
                    <div class="unity-btn" style="transform: rotate({random(8)-4}deg)">
                      <a href={col.link}>
                        <img src={col.unityAsset.image}>
                      </a>
                      <p> BREWED INK </p>
                      <p> {col.unityAsset.price} </p>
                      <a href={col.link}>
                        <button>
                          View On Asset Store
                        </button>
                      </a>
                    </div>
                  {:else}
                    <div class="link-btn" style="transform: rotate({.5*(random(col.descriptionRotation)-col.descriptionRotation*.5)}deg)">
                      <a href={col.link}><button>{@html col.linkHtml}</button></a>
                    </div>
                  {/if}  
                {/if}
              </div>


            </div>

          </div>
        {/each}
      </div>
    {/each}
  </div>
</main>

<style>


  #content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;


    overflow-y: hidden;
    overflow-x: hidden;
  }
  .row {
    display: flex;
    flex-grow: 1;
    flex-direction: row;
    justify-content: space-around;
    transition: all .2s ease-in-out;
    perspective: 2000px;
  }
  .row.small {
    flex-grow: .3;
    flex-shrink: 1;
  }
  .row.big {
    flex-grow: 1;
    flex-shrink: 0;
  }
  
  .giant-link {
    position: absolute;
    left: 0;
    right: 0;
    top:0;
    bottom:0;
  }
  .col {
    flex-grow: 1;
    transition: all .2s ease-in-out;

    position: relative;
    display: flex;
    padding: 12px;

  }

  .col .inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* pointer-events: none; */
    display: flex;
    flex-direction: column;
    justify-content: start;
   
    /* z-index: -1; */
  }

  .row.big .col.big .thing-title {
    margin-top: 1%;
  }
  .row.big .col.big .thing-title img {
    max-width: 60%;
  }
  .row.big .col.big .thing-title span {
    font-size: 2em;
  }

  .thing-title {
    transition: all .25s ease-in-out;
    font-size: 2em;
    margin-top: 11%;
  }

  .thing-title span {
    transition: all .25s ease-in-out;
    filter: drop-shadow(0px 0px 10px black) drop-shadow(0px -5px 20px black) ;
    font-size: 1.2em;
  }
  .thing-title span.isConsolas {
    font-family: 'Courier New', Courier, monospace;
    font-weight: bolder;
  }

  .thing-title img {
    transition: all .25s ease-in-out;
    max-width: 10vw;
    filter: drop-shadow(0px 0px 10px black);

  }

  .unity-btn a,
  .link-btn a {
    color: white;
    display: inline-block;
  }
  .link-btn button:hover {
    border: solid 1px rgb(221, 221, 221);
  }
  .unity-btn button:hover {
    border: solid 1px rgb(28, 28, 28);
  }
  .unity-btn button{
    cursor: pointer;
    color: rgb(221, 221, 221);
    background-color: rgba(0,0,0,.1);
    outline: none;
    margin-bottom: 0px;
    font-family: "Candal", serif;
    font-size: .7em;
    font-weight: 400;
    font-style: normal;
    border: solid 1px black;
    padding: 5px;
    margin-top: 2px;
    /* filter: drop-shadow(0px 5px 20px black); */

  }

  .link-btn button {
    cursor: pointer;
    color: rgb(221, 221, 221);
    background-color: rgb(70,70, 70);
    outline: none;
    border: solid 1px black;
    padding: 12px 16px;
    font-size: 1.2em;
    font-family: "Candal", serif;
    font-weight: 400;
    font-style: normal;
    border-radius: 4px;
    filter: drop-shadow(0px 5px 20px black);

  }

  .unity-btn {
    background-color: rgb(57, 57, 57);
    border: solid 1px rgb(100,100,100);
    margin: 12px auto;
    max-width: 30%;
    /* padding-bottom: 6px; */
    filter: drop-shadow(0px 5px 20px black);
  }
  .unity-btn img {
    max-width: 100%;
  }
  .unity-btn p {
    text-align: left;
    margin: 0 4px;
  }

  .row.big .col.big .thing-content {
    opacity: 1;
    transition: opacity .2s .2s ease-in-out;
  }

  .thing-content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    place-content: center;
    transition: opacity 0s .1s ease-in-out;
    opacity: 0;
  }

  .thing-desc {
    font-size: 1.2em;
    text-align: left;
    background-color:rgb(50, 50, 50);
    padding: 4px 12px;
    margin: 0px 40px;
    margin-bottom: 12px;
    /* margin-top: 90px; */
    border-radius: 2px;
    filter: drop-shadow(0px 0px 10px black);
    /* position: absolute;
    bottom: 40px; */
  }
  :global(.thing-desc p) {
    margin: 4px 0px;
  }
  :global(iframe) {
    background-color: transparent;
  }

  .col:not(.small ){
    filter: drop-shadow(0px 10px 10px  #0000003f);
  }


  .col.small {
    flex-grow: .4;
    flex-shrink: 1;
  }
  .col.big {
    flex-grow: 1;
    flex-shrink: 0;
  }

  .col .art {

    transition: all .2s ease-in-out;
    flex-grow: 1;
    background-size:90%;
    background-position: top;

    background-repeat: no-repeat;
    margin: 24px;

    filter: saturate(.4)
  }

  .row.small .art,
  .col.small .art {
    filter: saturate(.1) blur(.5px)
  }

  .row.small .col,
  .row.small,
  .col.small {
    /* filter: drop-shadow(0px 0px 10px  rgb(48, 48, 48)) !important; */
  }

  .row.big .col.big .art {
    margin: 0px;
    filter: blur(0);

  }

  .col .art.top {
    background-size: cover;
    background-repeat: repeat-y;
    background-position: top;

  }
  .col .art.cover {
    background-size: cover;
  }
  .col .art.vertical {
    background-position: center;
    background-repeat: repeat-y;
  }


  main {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  #title {
    /* height: var(--title-height); */
    text-align: center;
    position: relative;
    display: flex;
    margin-left: 10%;
    margin-right: 10%;
  }
  #title-header {
    position: relative;
    flex-grow: 1;
    min-width: 400px;
    text-align: right;
  }

  #title h1 {
    font-size: 4em;
    padding-top: 10px;
    font-family: "LemonTuesday";
    margin: 40px 20px;
    margin-bottom: 0px;
    margin-right: 50px;
    /* margin-left: 40px; */
  }
  a {
    opacity: .9;
  }
  a:hover {
    opacity: 1;
  }
  h3 {
    font-weight: bolder;
    margin: 0;
  }

  #title h1.shadow {
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    text-shadow:
      -2px 2px 10px rgba(255, 255, 255, 0.7),
      0px 0px 20px rgba(255, 255, 255, 0.3);
    margin: 40px 20px;
    margin-right: 50px;

    /* margin-left: 80px; */
  }

  #about {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
  #talks {
    margin-right: 50px;
    margin-top: 5px;
  }

  #about h3,
  #title h1:not(.shadow) {
    background-color: #f3ec78;
    background-image: linear-gradient(213deg, #ffd301 45%, #ee5c17 62%);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: top;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
  }

  #chris {
    text-align: left;
    text-align: left;
    padding-top: 50px;
    font-size: 1.15em;
    max-width: 40vw;
  }

  #socials a div.github:hover,
  #socials a div:hover {
    filter: brightness(1);

  }
  #socials {
    padding-top: 10px;
    text-align: left;
  }
  #socials a div {
    /* margin: 0px 20px; */
    display: inline-block;
    transition: all 0.2s;
    border-radius: 12px;
    background-color: rgba(0, 0, 0, .5);
    filter: grayscale();
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 36px;
    height: 36px;
  }

  .social {
    margin-right: 5px;
  }

  #socials a div.github {
    filter: brightness(.4);
  }

  @media ( (max-height: 900px)) or (max-width: 1000px) {
    /* @media (min-aspect-ratio: 1.2) { */

    #title {
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
    }
    #title-header {
      text-align: center;
      min-width: 0px;
    }
    #title-header h1 {
      margin: 0px auto !important;
    }
    #talks {
      margin-right: 0px;
      margin-top: 5px;
    }
    #about {
      align-items: center;
    }
    #chris {
      max-width: 90%;
      margin: 0px 0px;
    }

    .row {
      flex-direction: column;
    }
    .col {
      min-height: 80vh;
      font-size: .8em;
    }
    .col.big {
      margin-top: 20px;
    }
    .unity-btn {
      min-width: 60%;
    }
    .thing-desc {
      background: none;
      filter: drop-shadow(0px 0px 4px black) drop-shadow(0px 5px 2px black) drop-shadow(0px 0px 40px black)
    }
    .art {
      filter: saturate(.4) blur(3px) !important;
    }
    

  }
</style>
