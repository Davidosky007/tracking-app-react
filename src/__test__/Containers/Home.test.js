import renderer from 'react-test-renderer';
import Home from '../../Containers/Home';

describe('Home', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Home
      measurements={{}}
      getAllMeasurements={() => {}}
      date={{
        day: 1,
        month: 1,
        year: 1,
      }}
      changeDate={() => {}}
    />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
