const BASE_URL = `${import.meta.env.VITE_EXPRESS_BACKEND_URL}/hoots`;

const index = async () => {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(BASE_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

const show = async (hootId) => {
  try {
    const res = await fetch(`${BASE_URL}/${hootId}`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const create = async (hootFormData) => {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hootFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const createComment = async (hootId, commentFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${hootId}/comments`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const update = async (hootId, hootFormData) => {
  try {
    const res = await fetch(`${BASE_URL}/${hootId}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hootFormData),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
}

const deleteHoot = async (hootId) => {
  try {
    const res = await fetch(`${BASE_URL}/${hootId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { index, show, create, update, createComment, deleteHoot };
