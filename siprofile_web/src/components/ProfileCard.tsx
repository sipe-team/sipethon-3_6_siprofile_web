import { Box, Card, CardContent, Chip, Typography } from '@mui/material';

const data = {
  profileImgUrl: '/src/assets/profile-logo.svg',
  position: 'Android',
  name: '사이프',
  labels: [
    {
      id: 0,
      text: 'MBTI',
    },
    {
      id: 1,
      text: 'Instagram',
    },
  ],
};

const ProfileCard = () => {
  return (
    <Card
      sx={{
        width: '240px',
        height: '400px',
        borderRadius: '16px',
        background: 'linear-gradient(145deg,#FFFFFF 0%, #FDF0A0 30%, #3DDB85 70%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '48px',
          padding: '24px 60px',
        }}
      >
        <img src="/src/assets/profile-sipe-logo.svg" width={72} height={20} />
        <img src={data.profileImgUrl} width={120} height={100} />
      </CardContent>
      <CardContent
        sx={{ backgroundColor: '#fff', borderRadius: '0 0 16px 16px ', padding: '8px 16px' }}
      >
        <Typography variant="h2" component="p" align="left" sx={{ fontWeight: 'regular' }}>
          {data.position}
        </Typography>
        <Typography variant="h4" component="p" align="left" sx={{ fontWeight: 'bold', mt: 1 }}>
          {data.name}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            gap: 1,
            mt: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              padding: '8px 0',
            }}
          >
            {data.labels.map(({ id, text }) => {
              return (
                <Chip
                  key={id}
                  label={`#${text}`}
                  sx={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}
                />
              );
            })}
            <Chip label="#sipe_team" sx={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
