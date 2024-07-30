export const BackgroundStyle = {
    position: 'relative',
    minHeight: '100vh',
};

const PseudoElementStyle = (props) => ({
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `url(${props.url})`, // Assuming props.url contains the URL for the background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.8,
    zIndex: -1,
});

export default PseudoElementStyle;