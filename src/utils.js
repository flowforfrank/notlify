const request = ({ endpoint, method, data }) => {
    fetch(endpoint, {
        body: JSON.stringify(data),
        method,
        headers: {
            'Content-Type': 'application/json'
        }
    });
};

export const uuidv4 = () => 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
	const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
	return v.toString(16);
});

export const add = data => {
    request({
        endpoint: 'http://localhost:3000/pages',
        method: 'POST',
        data
    });
};

export const update = page => {
    request({
        endpoint: `http://localhost:3000/pages/${page.id}`,
        method: 'PUT',
        data: page
    });
};

export const remove = page => {
    request({
        endpoint: `http://localhost:3000/pages/${page.id}`,
        method: 'DELETE'
    });
};