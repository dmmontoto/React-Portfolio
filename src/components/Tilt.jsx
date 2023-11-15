import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function TiltCard(props) {
  // eslint-disable-next-line react/prop-types
  const { options, children } = props;
  const tilt = useRef(null);

  useEffect(() => {
    const tiltNode = tilt.current;

    if (tiltNode) {
      VanillaTilt.init(tiltNode, options);

      return () => {
        // Use the destroy method directly on the node
        tiltNode.vanillaTilt.destroy();
      };
    }
  }, [options]);

  return <div ref={tilt}>{children}</div>;
}

export default TiltCard;
