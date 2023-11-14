import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function TiltCard(props) {
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
