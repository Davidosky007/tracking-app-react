import renderer from 'react-test-renderer';
import Progress from '../../Containers/Progress';

describe('Progress', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Progress
      filter="Weight"
      measurements={{ Weight: [{ value: 0 }] }}
      getAllMeasurements={() => {}}
      changeFilter={() => {}}
    />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
