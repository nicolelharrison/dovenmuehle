import {
  selectGlobal,
  makeSelectStrings,
  makeSelectLocation,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = {};
    const mockedState = {
      global: globalState,
    };
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectStrings', () => {
  const stringsSelector = makeSelectStrings();
  it('should select the strings', () => {
    const strings = [];
    const mockedState = {
      global: {
        strings,
      },
    };
    expect(stringsSelector(mockedState)).toEqual(strings);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const router = {
      location: { pathname: '/foo' },
    };
    const mockedState = {
      router,
    };
    expect(locationStateSelector(mockedState)).toEqual(router.location);
  });
});
