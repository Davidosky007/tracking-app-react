import renderer from 'react-test-renderer';
import Add from '../../Containers/Add';

describe('Add', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Add
      units={[{ id: 1, title: 'unit1' }]}
      getUnits={() => {}}
      values={{ unit1: '1', unit2: '2' }}
      addValue={() => {}}
    />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
