import React from 'react';
import { Dialog } from 'components';

class App extends React.Component {
  state = {
    isVisibleDialog: false,
  };

  render() {
    return (
      <div
        className="container"
        style={{
          margin: 50,
        }}
      >
        <button
          type="button"
          class="openDialogButton"
          aria-haspopup="dialog"
          aria-label="모달 다이얼로그 열기"
          title="모달 다이얼로그 열기"
          onClick={() => {
            this.setState({
              isVisibleDialog: !this.state.isVisibleDialog,
            });
          }}
        >
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M14 4h-13v18h20v-11h1v12h-22v-20h14v1zm10 5h-1v-6.293l-11.646 11.647-.708-.708 11.647-11.646h-6.293v-1h8v8z" />
          </svg>
        </button>

        <Dialog isVisible={this.state.isVisibleDialog} />

        <div
          className="box"
          style={{
            height: 280,
          }}
        >
          <p>
            야무의, <a href="#">한글 로렘입숨</a>. 나무다리 흐렸다., 등불 섬들은
            몸을 구름처럼 어두워지는 조차 통하는 K는 큰 보이지 떠올랐는지 섬마다
            부풀어 도착했다. 풀고 바다에 눈에 듯싶었다. 마을은. 풀고 눈에,
            허공을 성이 K는 피었다. 따라서.
          </p>
          <p>
            마을은 하늘에 도착했다. 그뭄달이 서서, 따라서, 저녁 결박된 피었다.
            비치어, 어두워지는 길에서 꽃피는 성이 버려진 파묻혀. 보이지, 안개와
            수평선 구름처럼, 띄지 성이, <a href="#">등불</a> 떠올랐는지
            어두워지는 조차 바다에 풀고 않을뿐더러! 조차.
          </p>
          <p>
            결박된 깊이 희멀건 언제 파묻혀. 마을은 수평선 따라서 흘러가는 하늘에
            깊이 그뭄달빛은 조금도 어둠에 성이 있었다. 희미한 바다에 있는
            않을뿐더러 도착했다. 너머로 등불, 사슬을 꽃피는 안개와 큰, 섬들은
            걸려 결박된!
          </p>
        </div>
      </div>
    );
  }
}

export default App;
