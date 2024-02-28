import { Provider, connect } from "react-redux";
import { Text, TouchableOpacity, View } from "react-native";
import { Dispatch, RootState } from "../rematch/store/store";
import React from "react";

const mapState = (state: RootState) => ({
    count: state.count,
});

const mapDispatch = (dispatch: Dispatch) => ({
    increment: () => dispatch.count.increment(1),
    incrementAsync: () => dispatch.count.incrementAsync(1),
});

type StateProps = ReturnType<typeof mapState>;
type DispatchProps = ReturnType<typeof mapDispatch>;
type Props = StateProps & DispatchProps;

class Count extends React.Component<Props> {
    render() {
        return (
            <View>
                <Text>The count is {this.props.count}</Text>
                <TouchableOpacity onPress={() => this.props.increment()}>
                    <Text>increment</Text>
                </TouchableOpacity>
                {/* <button onClick={() => props.increment()}></button>
          <button onClick={() => props.incrementAsync()}>incrementAsync</button> */}
            </View>
        );
    }
}

export const HomeScreen = connect(mapState, mapDispatch)(Count);