import renderer from 'react-test-renderer';
import Icon from '../../Components/Icon';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'example.com/test',
  }),
}));

describe('Icon', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Icon
      path=""
      title=""
      clickHandler={() => {}}
      icon=""
    />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
