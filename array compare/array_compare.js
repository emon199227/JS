//array compare 
function highscore(scores)
{
    var max = scores[0];
    for (var i=1;i<scores.length;i++)
    {
        if(max<scores[i])
        {
            max=scores[i];
        }
    }
    return max;
}
var scorePoint = [21,28,1,88,15];
var maxscore=highscore(scorePoint);
document.write("Maximum number :  "+maxscore);