import QRCode from 'react-qr-code';

interface IQrcode {
  url: string;
}

const Qrcode = ({ url }: IQrcode) => {
  //  let url = 'https://www.naver.com';
  return (
    <div>
      <div
        style={{
          position: 'relative',
          height: 'auto',
          margin: '0 auto',
          maxWidth: 128,
          width: '100%',
        }}
      >
        <QRCode
          size={128}
          style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
          value={url}
          viewBox={`0 0 128 128`}
          level="H"
        />
        <img
          src="src/assets/qr-test-logo.png"
          width={15}
          height={15}
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
};

export default Qrcode;
