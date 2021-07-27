import renderer from 'react-test-renderer';
import AddCard from '../../Components/AddCard';

describe('AddCard', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AddCard
      id={1}
      title="Title"
      value="5"
      submitHandler={() => {}}
      changeHandler={() => {}}
    />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
