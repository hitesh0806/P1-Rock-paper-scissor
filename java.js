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
let x=0;
let y=0;
let z=0;
let a=0;
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
      x++;
    }
    else if (resul==='lost')
    {
      y++;
    }
    else if (resul==='tie')
    {
      z++;
    }
    if (resul==='win'|| resul==='lost'|| resul==='tie')
    {
      a++
    }
    playermov.textContent='Player move: '+playermove;
    computermov.textContent='Computer move: '+computermove;
    result.textContent='Result: '+resul;
    gameswon.textContent='Games won: '+x;
    gameslost.textContent='Games lost: '+y;
    gamestied.textContent='Games tied: '+z;
    totalgamesplayed.textContent='Games played: '+a;
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