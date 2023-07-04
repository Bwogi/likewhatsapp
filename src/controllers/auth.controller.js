// register function
export const register = async (req, res, next) => {
  try {
    res.send(req.body);
    // res.send("Request received");
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error); // from the createHttpError method that we created earlier
  }
};

// login function
export const login = async (req, res, next) => {
  try {
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error); // from the createHttpError method that we created earlier
  }
};

// logout function
export const logout = async (req, res, next) => {
  try {
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error); // from the createHttpError method that we created earlier
  }
};

// refresh token function
export const refreshToken = async (req, res, next) => {
  try {
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error); // from the createHttpError method that we created earlier
  }
};
