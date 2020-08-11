import styled from 'styled-components'; 

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    color: #111;
  }
`;

export const TableContainer = styled.section`
  margin-top: 44px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #969cb3;
      font-weight: normal;
      padding: 20px 32px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
    }

    td {
      padding: 20px 32px;
      border: 0;
      background: #fff;
      font-size: 16px;
      font-weight: normal;
      color: #969cb3;
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
      cursor: pointer;

      &:hover {
        color: #5636d3;
      }
    }

    input {
      border-radius: 4px;
      border-color: #969cb3;

      &:hover {
        border-color: #5636d3;
      }
    }
  }
`;