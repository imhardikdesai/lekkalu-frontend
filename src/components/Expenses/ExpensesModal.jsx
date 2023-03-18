import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography
} from "@mui/material";
import { ModalContainer } from "./styled";
import { formatDate, preventPropagationOnEnter } from "./utils";
import TagInput from "./TagInput";

const ExpenseFormModal = ({
  onAddExpense,
  onUpdateExpense,
  expenseToEdit,
  editIndex,
  onCancelEdit,
}) => {
  const [open, setOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (expenseToEdit) {
      setAmount(expenseToEdit.amount);
      setTags(expenseToEdit.tags);
      setOpen(true);
    }
  }, [expenseToEdit]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (editIndex !== null) {
      onCancelEdit();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      amount,
      tags,
      user: 1,
    };

    if (editIndex !== null) {
      onUpdateExpense(editIndex, { ...expenseToEdit, ...newExpense });
    } else {
      onAddExpense({ time: formatDate(new Date()), ...newExpense });
    }

    setAmount("");
    setTags("");
    handleClose();
  };

  const handleAmountChange = (event) => {
    const newValue = event.target.value;

    if (newValue === "" || (newValue >= 0 && !isNaN(newValue))) {
      setAmount(newValue);
    } else {
      return;
    }
  };

  return (
    <ModalContainer>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Expense
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editIndex !== null ? "Edit Expense" : "Add Expense"}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <Typography variant="p">Provide the amount:</Typography>
            <TextField
              value={amount}
              onChange={handleAmountChange}
              onKeyPress={preventPropagationOnEnter}
              required
              fullWidth
            />
            <Typography variant="p">Provide tags:</Typography>
            <TagInput tags={tags} setTags={setTags} />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit" color="primary">
                {editIndex !== null ? "Update" : "Add"}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </ModalContainer>
  );
};

export default ExpenseFormModal;
