namespace WeReaderApp
{
    partial class uxProfile
    {
        /// <summary> 
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary> 
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Component Designer generated code

        /// <summary> 
        /// Required method for Designer support - do not modify 
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(uxProfile));
            this.uxProfilePic = new System.Windows.Forms.Button();
            this.uxUserNameLbl = new System.Windows.Forms.Label();
            this.uxTopList = new System.Windows.Forms.ListBox();
            this.uxTopLabel = new System.Windows.Forms.Label();
            this.uxRecentLbl = new System.Windows.Forms.Label();
            this.uxRecentReadList = new System.Windows.Forms.ListBox();
            this.uxFriends = new System.Windows.Forms.Label();
            this.uxTotalRead = new System.Windows.Forms.Label();
            this.uxFavGenre = new System.Windows.Forms.Label();
            this.SuspendLayout();
            // 
            // uxProfilePic
            // 
            this.uxProfilePic.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.uxProfilePic.FlatStyle = System.Windows.Forms.FlatStyle.Flat;
            this.uxProfilePic.Image = ((System.Drawing.Image)(resources.GetObject("uxProfilePic.Image")));
            this.uxProfilePic.Location = new System.Drawing.Point(13, 3);
            this.uxProfilePic.Name = "uxProfilePic";
            this.uxProfilePic.Size = new System.Drawing.Size(179, 145);
            this.uxProfilePic.TabIndex = 0;
            this.uxProfilePic.UseVisualStyleBackColor = true;
            // 
            // uxUserNameLbl
            // 
            this.uxUserNameLbl.AutoSize = true;
            this.uxUserNameLbl.Font = new System.Drawing.Font("Cambria", 48F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point);
            this.uxUserNameLbl.Location = new System.Drawing.Point(3, 151);
            this.uxUserNameLbl.Name = "uxUserNameLbl";
            this.uxUserNameLbl.Size = new System.Drawing.Size(200, 75);
            this.uxUserNameLbl.TabIndex = 1;
            this.uxUserNameLbl.Text = "Name";
            this.uxUserNameLbl.Click += new System.EventHandler(this.uxUserNameLbl_Click);
            // 
            // uxTopList
            // 
            this.uxTopList.BackColor = System.Drawing.Color.Ivory;
            this.uxTopList.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.uxTopList.Font = new System.Drawing.Font("Cambria", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.uxTopList.ForeColor = System.Drawing.Color.MediumPurple;
            this.uxTopList.FormattingEnabled = true;
            this.uxTopList.ItemHeight = 22;
            this.uxTopList.Location = new System.Drawing.Point(320, 58);
            this.uxTopList.Name = "uxTopList";
            this.uxTopList.Size = new System.Drawing.Size(287, 418);
            this.uxTopList.TabIndex = 2;
            // 
            // uxTopLabel
            // 
            this.uxTopLabel.AutoSize = true;
            this.uxTopLabel.Font = new System.Drawing.Font("Cambria", 26.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.uxTopLabel.Location = new System.Drawing.Point(320, 14);
            this.uxTopLabel.Name = "uxTopLabel";
            this.uxTopLabel.Size = new System.Drawing.Size(256, 41);
            this.uxTopLabel.TabIndex = 3;
            this.uxTopLabel.Text = "My Top 5 Books";
            // 
            // uxRecentLbl
            // 
            this.uxRecentLbl.AutoSize = true;
            this.uxRecentLbl.Font = new System.Drawing.Font("Cambria", 26.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.uxRecentLbl.Location = new System.Drawing.Point(654, 14);
            this.uxRecentLbl.Name = "uxRecentLbl";
            this.uxRecentLbl.Size = new System.Drawing.Size(229, 41);
            this.uxRecentLbl.TabIndex = 4;
            this.uxRecentLbl.Text = "Recently Read";
            // 
            // uxRecentReadList
            // 
            this.uxRecentReadList.BackColor = System.Drawing.Color.Ivory;
            this.uxRecentReadList.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.uxRecentReadList.Font = new System.Drawing.Font("Cambria", 14.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.uxRecentReadList.ForeColor = System.Drawing.Color.MediumPurple;
            this.uxRecentReadList.FormattingEnabled = true;
            this.uxRecentReadList.ItemHeight = 22;
            this.uxRecentReadList.Location = new System.Drawing.Point(654, 58);
            this.uxRecentReadList.Name = "uxRecentReadList";
            this.uxRecentReadList.Size = new System.Drawing.Size(281, 418);
            this.uxRecentReadList.TabIndex = 5;
            // 
            // uxFriends
            // 
            this.uxFriends.AutoSize = true;
            this.uxFriends.Font = new System.Drawing.Font("Cambria", 26.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.uxFriends.Location = new System.Drawing.Point(13, 237);
            this.uxFriends.Name = "uxFriends";
            this.uxFriends.Size = new System.Drawing.Size(159, 41);
            this.uxFriends.TabIndex = 6;
            this.uxFriends.Text = "X Friends";
            // 
            // uxTotalRead
            // 
            this.uxTotalRead.AutoSize = true;
            this.uxTotalRead.Font = new System.Drawing.Font("Cambria", 26.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.uxTotalRead.Location = new System.Drawing.Point(13, 298);
            this.uxTotalRead.Name = "uxTotalRead";
            this.uxTotalRead.Size = new System.Drawing.Size(120, 41);
            this.uxTotalRead.TabIndex = 7;
            this.uxTotalRead.Text = "X Read";
            // 
            // uxFavGenre
            // 
            this.uxFavGenre.AutoSize = true;
            this.uxFavGenre.Font = new System.Drawing.Font("Cambria", 26.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.uxFavGenre.Location = new System.Drawing.Point(13, 352);
            this.uxFavGenre.Name = "uxFavGenre";
            this.uxFavGenre.Size = new System.Drawing.Size(166, 41);
            this.uxFavGenre.TabIndex = 8;
            this.uxFavGenre.Text = "Fav Genre";
            this.uxFavGenre.Click += new System.EventHandler(this.uxFavGenre_Click);
            // 
            // uxProfile
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(7F, 14F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.Ivory;
            this.Controls.Add(this.uxFavGenre);
            this.Controls.Add(this.uxTotalRead);
            this.Controls.Add(this.uxFriends);
            this.Controls.Add(this.uxRecentReadList);
            this.Controls.Add(this.uxRecentLbl);
            this.Controls.Add(this.uxTopLabel);
            this.Controls.Add(this.uxTopList);
            this.Controls.Add(this.uxUserNameLbl);
            this.Controls.Add(this.uxProfilePic);
            this.Font = new System.Drawing.Font("Cambria", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point);
            this.ForeColor = System.Drawing.Color.MediumPurple;
            this.Name = "uxProfile";
            this.Size = new System.Drawing.Size(987, 498);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private Button uxProfilePic;
        private Label uxUserNameLbl;
        private ListBox uxTopList;
        private Label uxTopLabel;
        private Label uxRecentLbl;
        private ListBox uxRecentReadList;
        private Label uxFriends;
        private Label uxTotalRead;
        private Label uxFavGenre;
    }
}
