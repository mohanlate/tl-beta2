<?php


	require_once "dbLibrary.php";

	$obj = new Library();

	switch ($_SERVER['REQUEST_METHOD']) {
		case "GET":
				$id = explode("item/", $_SERVER['REQUEST_URI']);
				if (isset($id[1])){
					/*
					 Query the database to get the information 
					 about the item with ID = $id[1]
					*/
					$result = $obj->get_item_by_id($id[1]);
				}
				else {
					/*
					 Query the database to get the information 
					 about all the item
					*/
					$result = $obj->get_items();
				}
				break;

		case "POST":
				// Save a new record in the database
				$result = $obj->register_new_item($_POST);
				break;

		case "PUT":
				// Retrieve additional data
				$d = json_decode(file_get_contents("php://input"), false);
				$result = $obj->loan_item($d);
				break;
		case "DELETE":
				$id = explode("item/", $_SERVER['REQUEST_URI']);
				if (isset($id[1])){
					$result = $obj->delete_item($id[1]);
				}
				break;
		}

		$json = json_encode($result);
		echo $json;
		return;

