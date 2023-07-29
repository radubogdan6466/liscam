import Address from "../model/addressSchema.js";

export const reportAddress = async (request, response) => {
  try {
    const address = new Address(request.body);
    await address.save();

    response.status(200).json("Address reported successfully");
  } catch (error) {
    response.status(500).json(error);
  }
};
export const checkAddress = async (req, res) => {
  const address = req.params.address;
  const reportedAddress = await Address.findOne({ address: address });

  if (reportedAddress) {
    res.send({
      isReported: true,
      details: reportedAddress.details,
    });
  } else {
    res.send({ isReported: false });
  }
};
