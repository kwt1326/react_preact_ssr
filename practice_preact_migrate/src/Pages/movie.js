import React, { Component } from 'react';
import axios from 'axios';
import * as KEYS from '../apikey';

class Movie extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movie: [], // test call api
    }
  }

  componentDidMount() {
    this.callApiMovieKor();
  }

  callApiMovieKor = async () => {
    const url = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
    const dateDT = '20200817';
    await axios({
      method: 'GET',
      url: `${url}?key=${KEYS.movieKeyKor}&targetDt=${dateDT}`,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => {
      console.log(res)
      this.setState({
        movie: res.data.boxOfficeResult.dailyBoxOfficeList
      })
    }).catch(err => {
      console.log(err)
    })
  }

  renderMovieTable = () => {
    const { movie } = this.state;
    if (!!movie) {
      return (
        <table>
          <thead>
            <tr>
              <td style={{ padding: '10px' }}>
                Random movie
              </td>
            </tr>
          </thead>
          <tbody>
            {
              !!movie.length ?
              movie.map(elem => {
                return (<tr>
                  <td style={{ padding: '10px' }}>{elem.rnum}</td>
                  <td style={{ padding: '10px' }}>{elem.movieNm}</td>
                  <td style={{ padding: '10px' }}>{elem.audiCnt}</td>
                  <td style={{ padding: '10px' }}>{elem.audiAcc}</td>
                </tr>)
              })
              : 'Loading...'
            }
          </tbody>
        </table>
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Movie Page</h1>
        {
          this.state.movie &&
          this.renderMovieTable()
        }
      </div>
    );
  }
}

export default Movie;
