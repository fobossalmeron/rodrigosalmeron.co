<script>
  import TransitionWrapper from "../components/TransitionWrapper.svelte";
</script>

<TransitionWrapper>
  <p>drive</p>
  <!-- <video width="350" height="250" controls>
    <source src="https://drive.google.com/file/d/1iCaDhfJYMqQ1inYTMUegmV2yrBG8ZO9q/preview" type="video/mp4">
  </video> -->
  <div id="container">
    <div id="hidder" />
    <iframe
      id="youtube"
      title="video"
      src="https://drive.google.com/file/d/1iCaDhfJYMqQ1inYTMUegmV2yrBG8ZO9q/preview"
      width="640"
      height="480"
      allow="fullscreen"
    />
  </div>
</TransitionWrapper>

<style>
  h1 {
    display: inline;
  }
  p,
  h1 {
    font-size: 2.4rem;
    max-width: 820px;
    margin-top: 0;
    width: 100%;
  }
  #youtube {
    width: 100%;
    height: auto;
    min-height: 250px;
    z-index: -1;
    outline: 0;
    border: 0;
    background-color: black;
  }
  #container {
    position: relative;
  }
  #hidder {
    width: 60px;
    height: 70px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 10;
    pointer-events: auto;
    background-color: rgba(255, 255, 255, 0);
  }
</style>
