import { useNavigation } from 'react-router-dom';

export default function SubmitBtn({ classN, form, id, action, text }) {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === 'submitting';

    return (
        <button
            className={`${classN} btn dark subm`}
            form={`${form}-form`}
            id={`btn-${id}-form`}
            disabled={isSubmitting}
        >
            {isSubmitting ? `${action}...` : `${text}`}
        </button>
    );
}
