const rock=document.getElementById('rock');
const paper=document.getElementById('paper');
const scissor=document.getElementById('scissor');
const resetbtn=document.getElementById('reset');
const result=document.getElementById('result');
const computermov=document.getElementById('computermove');
const playermov=document.getElementById('playermove');
const gameswon=document.getElementById('gameswon');
const gameslost=document.getElementById('gameslost');
const gamestied=document.getElementById('gamestied');
const totalgamesplayed=document.getElementById('totalgamesplayed');
let score=JSON.parse(localStorage.getItem('score'))||
{
    wins:0,
    loss:0,
    ties:0,
    gp:0,
}

function playgame(playermove)
{
  let computermove = randommove()
  let  resul='';
    if (playermove==='rock')
    {
      if (computermove==='rock')
      {
        resul='tie';
      }
      else if (computermove==='paper')
      {
        resul='lost'
      }
      else if (computermove==='scissor')
      {
        resul='win'
      }
    }
    if (playermove==='paper')
      {
        if (computermove==='rock')
        {
          resul='win';
        }
        else if (computermove==='paper')
        {
          resul='tie'
        }
        else if (computermove==='scissor')
        {
          resul='lost'
        }
      }
      if (playermove==='scissor')
        {
          if (computermove==='rock')
          {
            resul='lost';
          }
          else if (computermove==='paper')
          {
            resul='win'
          }
          else if (computermove==='scissor')
          {
            resul='tie'
          }
        }
    if (resul==='win')
    {
      score.wins++;
    }
    else if (resul==='lost')
    {
      score.loss++;
    }
    else if (resul==='tie')
    {
      score.ties++;
    }
    if (resul==='win'|| resul==='lost'|| resul==='tie')
    {
      score.gp++
    }
    localStorage.setItem('score',JSON.stringify(score));
    playermov.textContent='Player move: '+playermove;
    computermov.textContent='Computer move: '+computermove;
    result.textContent='Result: '+resul;
    gameswon.textContent='Games won: '+score.wins;
    gameslost.textContent='Games lost: '+score.loss;
    gamestied.textContent='Games tied: '+score.ties;
    totalgamesplayed.textContent='Games played: '+score.gp;
}
function randommove()
{
 let x=Math.random()
 {
    if (x>=0&&x<1/3)
    {
        computermove='rock';
    }
    else if (x>=1/3&&x<2/3)
    {
        computermove='paper';
    }
    else if (x>=2/3&&x<=1)
    {
        computermove='scissor';
    }
 }   
 return computermove;
}