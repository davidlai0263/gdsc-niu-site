import { Box, Avatar, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

const nameFontStyle = {
    fontFamily: 'Google Sans',
    textAlign: 'center',
    fontSize: '20px'
}
const introFontStyle = {
    fontFamily: 'Google Sans',
    textAlign: 'center',
    fontSize: '14px'
}
const avatarSx = {
    my: 2,
    width: '100%',
    height: '100%', 
    maxWidth: 200
}
interface Organizer {
    name: string
    photo: string
    intro: string
}

const organizers = new Array<Organizer>(
    {
        name: 'Richard Lu',
        photo:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/richard_lu.jpg',
        intro:'GDSC Lead'
    },
    {
        name: 'David Lai',
        photo: 'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/%E5%AE%A5%E8%93%81_%E8%B3%B4_3TKcozJ.JPG',
        intro:'總務、網管'
    },
    {
        name: '沛倫 章',
        photo:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/%E6%B2%9B%E5%80%AB_%E7%AB%A0_wP5iUZK.jpg',
        intro:'文書、行政'
    },
    {
        name: 'Shaber Tseng',
        photo:'https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/featured_attendees/LINE_P202169_033701.jpg',
        intro:'活動、企劃'
    },
    
)

function About() {
    return (
        <Box>
            <h3 style={{ textAlign: 'center', fontSize: '36px' }}>Organizers</h3>
            <Box display='flex' justifyContent='center'><AboutGrid /></Box>
        </Box>
    )
}

function AboutGrid() {
    return (
        <Grid container rowSpacing={5} spacing={4} m={1} width='100%' maxWidth={1200}>
            {organizers.map((item, index)=>{
                return <Grid xs={12} md={3} key={`organizer-grid-${index}`}>
                <Box
                    display='flex'
                    justifyContent='center'
                >
                    <Avatar
                        alt={item.name}
                        src={item.photo}
                        sx={avatarSx}
                    />
                </Box>
                <Typography sx={nameFontStyle}>{item.name}</Typography>
                <Typography sx={introFontStyle}>{item.intro}</Typography>
            </Grid>
            })}
            {/* <Grid xs={12} md={3}>
                <Box
                    display='flex'
                    justifyContent='center'
                >
                    <Avatar
                        alt="David Lai"
                        src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/%E5%AE%A5%E8%93%81_%E8%B3%B4_3TKcozJ.JPG"
                        sx={avatarSx}
                    />
                </Box>
                <Typography sx={nameFontStyle}>David Lai</Typography>
            </Grid>
            <Grid xs={12} md={3}>
                <Box
                    display='flex'
                    justifyContent='center'
                >
                    <Avatar
                        alt="David Lai"
                        src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/%E5%AE%A5%E8%93%81_%E8%B3%B4_3TKcozJ.JPG"
                        sx={avatarSx}
                    />
                </Box>
                <Typography sx={nameFontStyle}>David Lai</Typography>
            </Grid>
            <Grid xs={12} md={3}>
                <Box
                    display='flex'
                    justifyContent='center'
                >
                    <Avatar
                        alt="David Lai"
                        src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/%E5%AE%A5%E8%93%81_%E8%B3%B4_3TKcozJ.JPG"
                        sx={avatarSx}
                    />
                </Box>
                <Typography sx={nameFontStyle}>David Lai</Typography>
            </Grid>
            <Grid xs={12} md={3}>
                <Box
                    display='flex'
                    justifyContent='center'
                >
                    <Avatar
                        alt="David Lai"
                        src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/%E5%AE%A5%E8%93%81_%E8%B3%B4_3TKcozJ.JPG"
                        sx={avatarSx}
                    />
                </Box>
                <Typography sx={nameFontStyle}>David Lai</Typography>
            </Grid> */}
        </Grid>
    )
}

export default About