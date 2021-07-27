import renderer from 'react-test-renderer';
import Nav from '../../Components/Nav';

describe('Nav', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
