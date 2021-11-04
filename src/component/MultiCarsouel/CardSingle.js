import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Button} from '@material-ui/core'
import { useHistory } from "react-router";
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Avatar} from '@material-ui/core'
import { green } from '@mui/material/colors';


export default function CardSingle(prop) {
  var history=useHistory()
  const btnstyle={margin:'8px 0'}
  const avatarStyle={backgroundColor:'#1bbd7e'}
  const  submitUser=async()=>{
    history.push("/donate")
  }
    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="1.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           ID: {prop.beneficaryID}
          </Typography>
          <Typography className="row justify content left mx-3" variant="h6" color="black">
          {prop.beneficiaryName}
          </Typography>
          <Typography className="row justify content left mx-3" variant="h6" color="black">
          TargetAmount:{prop.targetAmount}
          </Typography>
          <Typography className="row justify content center mx-3" variant="h6" color="black">
          Story:{prop.story}
          </Typography>
          <Button type='submit' color='secondary' variant="contained" style={btnstyle} fullWidth onClick={submitUser}>Donate</Button>
        </CardContent>
      </CardActionArea>
    </Card>
        </div>
    )
}
