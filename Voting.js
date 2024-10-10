let congressVote = 0;
let BRSVote = 0;
let BJPVote = 0;
let BSPVote = 0;
let maxVotes = 0;
let maxParty = null;
let voteButtons = document.getElementsByClassName("vote-button");
let statusHeading = document.getElementById("status-heading");
let congressRow = document.getElementsByClassName("table-body-congress");
let brsRow = document.getElementsByClassName("table-body-brs");
let bjpRow = document.getElementsByClassName("table-body-bjp");
let bspRow = document.getElementsByClassName("table-body-bsp");



function disableButtons(row)
{
    statusHeading.innerText = "EVM is registering vote. Please wait";
    for(let i=0;i<4;i++)
    {
        voteButtons[i].disabled = true;
        row[i].style.backgroundColor = "rgb(106, 245, 103)";
    }
    setTimeout(()=>{
        statusHeading.innerText = "Cast your vote!";
        for(let i=0;i<4;i++)
            {
                voteButtons[i].disabled = false;
                row[i].style.backgroundColor = "khaki";

            }
        
    },5000);

}
function addVote(symbol)
{
    if(symbol=='+')
    {
        congressVote++;
        disableButtons(congressRow);
        if(congressVote>maxVotes){
            maxVotes = congressVote;
            maxParty = "Congress";
        }
    }
    else if(symbol=='-')
    {
        BRSVote++;
        disableButtons(brsRow);
        if(BRSVote>maxVotes){
            maxVotes = BRSVote;
            maxParty = "BRS";
        }
    }
    else if(symbol=='X')
    {
        BJPVote++;
        disableButtons(bjpRow);
        if(BJPVote>maxVotes){
            maxVotes = BJPVote;
            maxParty = "BJP";
        }
    }
    else if(symbol=='$')
    {
        BSPVote++;
        disableButtons(bspRow);
        if(BSPVote>maxVotes){
            maxVotes = BSPVote;
            maxParty = "BSP";
        }
    }
}
function showResult()
{
     statusHeading.innerText = "The Winner is "+maxParty+" with "+maxVotes+" votes!";
}