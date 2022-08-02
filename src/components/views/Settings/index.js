import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getSettings, updateSettings } from '../../../api';
import { CheckBox, Input } from '../../../components/form';
import { Button } from '../../../components/interactive';

function Settings() {
    const navigate = useNavigate();
    const [settings, setSettings] = useState(null);

    useEffect(() => {
        setSettings(getSettings());
    }, []);

    const _onCancel = e => {
        e.preventDefault();
        navigate(-1);
    };

    const _onChange = (name, value) => {
        setSettings(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const _onSubmit = e => {
        e.preventDefault();
        try {
            updateSettings(settings);
            navigate(-1);
        } catch (e) {
            alert(e.message);
        }
    };

    if (settings === null) {
        return (
            <Wrapper>
                <h1>Settings</h1>
                <p>Loading...</p>
            </Wrapper>
        );
    }

    return (
        <Wrapper>
            <h1>Settings</h1>
            <form onSubmit={_onSubmit}>
                <div>
                    <Input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={_onChange}
                        value={settings.firstName}
                    />
                    <CheckBox
                        name="darkMode"
                        label="Dark Mode"
                        onChange={_onChange}
                        value={settings.darkMode}
                    />
                </div>
                <div>
                    <Button onClick={_onCancel}>Cancel</Button>
                    <Button>Save</Button>
                </div>
            </form>
        </Wrapper>
    );
}

export default Settings;

const Wrapper = styled.section``;
