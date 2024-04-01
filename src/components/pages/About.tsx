
interface Props {
  aboutMe: string;
  education: string;
  skills: string;
}

const About = ({ aboutMe, education, skills }: Props) => {
  return (
    <div style={{ 
      fontFamily: 'Trebuchet MS',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'start',
      flexDirection: 'column', /* Align items vertically */
      height: '90vh',
      padding: '0 25px',
      backgroundColor: '#333',
      color: '#f0f0f0',
    }}>
      <div>
        <div>
          <h2 style={{ 
            fontWeight: 'bold',
            fontSize: '40px',
            margin: '20px 0',
          }}>
            About Me
          </h2>
          <p style={{ 
            fontSize: '20px',
            lineHeight: '1.5',
          }}>
            { aboutMe }
          </p>
          <h2 style={{ 
            fontWeight: 'bold',
            fontSize: '40px',
            margin: '20px 0',
          }}>
            Education
          </h2>
          <p style={{ 
            fontSize: '20px',
            lineHeight: '1.5',
          }}>
            { education }
          </p>
          <h2 style={{ 
            fontWeight: 'bold',
            fontSize: '40px',
            margin: '20px 0',
          }}>
            Skills
          </h2>
          <p style={{ 
            fontSize: '20px',
            lineHeight: '1.5',
          }}>
            { skills }
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;