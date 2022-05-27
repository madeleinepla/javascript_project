import GameMap from "./game_map";

class Game {
  constructor(config) {
    this.element = config.element;
    this.canvas = this.element.querySelector(".game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.map = new GameMap();
  }

  startGameloop() {
    const step = () => {

      this.map.drawBackground(this.ctx);
      this.map.player.updatePos();
      this.map.player.sprite.draw(this.ctx, this.map.player);
      this.map.player.sprite.updateAnimationProgress();
      // this.map.monster.x += 1;
      this.map.monster.sprite.draw(this.ctx, this.map.player);
      this.map.monster.sprite.updateAnimationProgress();

      requestAnimationFrame(() => {
        step();
      })
    }
    step();
  }

  init() {
    this.startGameloop();

    
  }
}

export default Game;