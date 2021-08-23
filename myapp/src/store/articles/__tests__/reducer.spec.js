import { REQUEST_STATUS } from "../../../constants";
import { REQUEST_PENDING, REQUEST_SUCCESS, REQUEST_ERROR } from "../actionTypes";
import { articlesReducer } from "../reducer";

describe("articlesReducer", () => {
it("returns state with status idle if reducer has empty input", () => {
  const expected = {
    data: [],
    request: {
      status: REQUEST_STATUS.IDLE,
      error: null,
    },
  };

  const received = articlesReducer(undefined, {});
  expect(received).toEqual(expected);
  });

  it("returns state with status loading if input type REQUEST_PENDING", () => {
    const expected = {
      data: [],
      request: {
        status: REQUEST_STATUS.PENDING,
        error: null,
      },
    };
  
    const received = articlesReducer(undefined, { type: REQUEST_PENDING });
    expect(received).toEqual(expected);
    });

  it("returns state with status success if input type REQUEST_SUCCESS", () => {
      const expected = {
        data: "autotest",
        request: {
          status: REQUEST_STATUS.SUCCESS,
        },
      };
    
      const received = articlesReducer(undefined, {type: REQUEST_SUCCESS, payload: "autotest"});
      expect(received).toEqual(expected);
      });

  it("returns state with status error if input type REQUEST_ERROR", () => {
    const expected = {
        data: [],
          request: {
            status: REQUEST_STATUS.ERROR,
            error: "autotest",
          },
        };
      
    const received = articlesReducer(undefined, {type: REQUEST_ERROR, payload: "autotest"});
        expect(received).toEqual(expected);
        });
});